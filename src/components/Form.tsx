import styles from "./form.module.css";
import { useFormStatus } from "react-dom";
import { useState } from "react";

interface formProps {
  onMouseEnterFunc: () => void;
  onMouseLeaveFunc: () => void;
}

const Form = ({ onMouseEnterFunc, onMouseLeaveFunc }: formProps) => {
  const { pending } = useFormStatus();
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  const submitForm = async (formData: object) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Reponse status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setError(false);
      } else {
        setError(true);
        setSent(false);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form action={submitForm} className={styles.form}>
        <div className={styles.inputField}>
          <label htmlFor="name">NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            onMouseEnter={onMouseEnterFunc}
            onMouseLeave={onMouseLeaveFunc}
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            onMouseEnter={onMouseEnterFunc}
            onMouseLeave={onMouseLeaveFunc}
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="message">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            onMouseEnter={onMouseEnterFunc}
            onMouseLeave={onMouseLeaveFunc}
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className={styles.btn}
          onMouseEnter={onMouseEnterFunc}
          onMouseLeave={onMouseLeaveFunc}
        >
          {pending ? "Submitting..." : "Submit"}
        </button>
        {error ? (
          <p className={styles.error}>
            An error has occured sending the form. Please try again later.
          </p>
        ) : (
          ""
        )}
        {sent ? <p className={styles.sent}>Message has been sent!</p> : ""}
      </form>
    </div>
  );
};

export default Form;

import styles from "./form.module.css";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { motion } from "motion/react";

interface formProps {
  onMouseEnterFunc: () => void;
  onMouseLeaveFunc: () => void;
}

const Form = ({ onMouseEnterFunc, onMouseLeaveFunc }: formProps) => {
  const { pending } = useFormStatus();
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async () => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phoneNumber, message }),
      });

      if (!response.ok) {
        throw new Error(`Reponse status: ${response.status}`);
      }
      setSent(true);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setSent(false);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            onMouseEnter={onMouseEnterFunc}
            onMouseLeave={onMouseLeaveFunc}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onMouseEnter={onMouseEnterFunc}
            onMouseLeave={onMouseLeaveFunc}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="tel">PHONE NUMBER</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onMouseEnter={onMouseEnterFunc}
            onMouseLeave={onMouseLeaveFunc}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="message">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onMouseEnter={onMouseEnterFunc}
            onMouseLeave={onMouseLeaveFunc}
            required
          />
        </div>
        <motion.button
          whileHover={{
            scale: 1.04,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.98,
          }}
          type="submit"
          disabled={pending}
          className={styles.btn}
          onMouseEnter={onMouseEnterFunc}
          onMouseLeave={onMouseLeaveFunc}
        >
          {pending ? "Submitting..." : "Submit"}
        </motion.button>
        {error ? (
          <p className={styles.error}>
            An error has occured sending the form. Please try again later.
          </p>
        ) : (
          ""
        )}
        {sent ? <p className={styles.sent}>Message has been sent!</p> : ""}
        <div className={styles.contactOptions}>
          <p>
            Reach out directly via{" "}
            <a
              href="mailto:Johan.mesa2001@gmail.com"
              onMouseEnter={onMouseEnterFunc}
              onMouseLeave={onMouseLeaveFunc}
            >
              email
            </a>{" "}
            or{" "}
            <a
              href="tel:8579301820"
              onMouseEnter={onMouseEnterFunc}
              onMouseLeave={onMouseLeaveFunc}
            >
              phone
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;

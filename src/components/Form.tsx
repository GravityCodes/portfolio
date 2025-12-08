import styles from "./form.module.css";

interface formProps {
  onMouseEnterFunc: () => void;
  onMouseLeaveFunc: () => void;
}

const Form = ({onMouseEnterFunc, onMouseLeaveFunc}:formProps) => {
  return (
    <div className={styles.formContainer}>
      <form action="#" className={styles.form}>
        <div className={styles.inputField}>
          <label htmlFor="name">NAME</label>
          <input type="text" id="name" name="name" onMouseEnter={onMouseEnterFunc} onMouseLeave={onMouseLeaveFunc} />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" name="email" onMouseEnter={onMouseEnterFunc} onMouseLeave={onMouseLeaveFunc} />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="message">MESSAGE</label>
          <textarea id="message" name="message" onMouseEnter={onMouseEnterFunc} onMouseLeave={onMouseLeaveFunc}/>
        </div>
        <button type="submit" className={styles.btn} onMouseEnter={onMouseEnterFunc} onMouseLeave={onMouseLeaveFunc}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

import styles from "./form.module.css";

const Form = () => {
  return (
    <form action="#" className={styles.form}>
      <div className={styles.inputField}>
        <label htmlFor="name">NAME</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className={styles.inputField}>
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className={styles.inputField}>
        <label htmlFor="message">MESSAGE</label>
        <textarea id="message" name="message" />
      </div>
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );
};

export default Form;

import styles from "./tag.module.css";

interface tagProps {
  text: string;
}

const Tag = ({ text }: tagProps) => {
  return <div className={`${styles.tag}`}>{text}</div>;
};

export default Tag;

import styles from "./tag.module.css";

interface tagProps {
    key: number;
    text: string;
}

const Tag = ({key, text}: tagProps) => {
    return (
        <div key={key} className={`${styles.tag}`}>{text}</div>
    )
}

export default Tag;
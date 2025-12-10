import styles from "./tool.module.css";
import { motion } from "motion/react";

interface toolProps {
  imgUrl: string;
  alt: string;
  color: string;
  title: string;
}

const Tool = ({ imgUrl, alt, color, title }: toolProps) => {
  return (
    <motion.div
      title={title}
      className={styles.toolContainer}
      whileHover={{
        boxShadow: `0px 0px 20px ${color}`,
      }}
    >
      <img src={imgUrl} alt={alt} />
    </motion.div>
  );
};

export default Tool;

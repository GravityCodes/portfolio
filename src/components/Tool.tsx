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
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      title={title}
      className={styles.toolContainer}
    >
      <motion.div
        title={title}
        style={{
          boxShadow: `0px 0px 20px ${color}`,
          opacity: 0,
          height: "100%",
          width: "100%",
          position: "absolute",
          left: 0,
          top: 0,
        }}
        whileHover={{
          opacity: 1,
          transition: { duration: 0.1 },
        }}
        transition={{ duration: 4 }}
      ></motion.div>
      <img src={imgUrl} alt={alt} />
    </motion.div>
  );
};

export default Tool;

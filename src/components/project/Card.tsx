import styles from "./card.module.css";
import Tag from "./Tag";

interface CardProps {
  title: string;
  paragraph: string;
  imgUrl: string;
  imgAlt: string;
  tags: Array<string>;
}

const Card = ({ title, paragraph, imgUrl, imgAlt, tags }: CardProps) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImgContainer}>
        <img src={imgUrl} alt={imgAlt} />
      </div>
      <div className={styles.projectBottom}>
        <div className={styles.projectTitle}>
          <h4>{title}</h4>
        </div>
        <div className={styles.projectDescriptionContainer}>
          <p className={styles.paragraph}>{paragraph}</p>
        </div>
        <div className={styles.projectTagsContainer}>
          {tags.map((tag: string, index: number) => {
            return <Tag key={index} text={tag} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;

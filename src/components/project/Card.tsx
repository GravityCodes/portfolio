import styles from "./card.module.css";
import Tag from "./Tag";

interface CardProps {
  title: string;
  paragraph: string;
  imgUrl: string;
  imgAlt: string;
  tags: Array<string>;
  repo: string;
  website: string;
  onMouseEnterFunc: () => void;
  onMouseLeaveFunc: () => void;
}

const Card = ({
  title,
  paragraph,
  imgUrl,
  imgAlt,
  tags,
  repo,
  website,
  onMouseEnterFunc,
  onMouseLeaveFunc
}: CardProps) => {
  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectCard}>
        <div className={styles.front}>
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
        <div className={styles.back}>
          <a href={repo} target="_blank" onMouseEnter={onMouseEnterFunc} onMouseLeave={onMouseLeaveFunc}>
            <img
              src="/github-logo-white.svg"
              alt="link to this website's repo"
            />
          </a>
          <a href={website} target="_blank" onMouseEnter={onMouseEnterFunc} onMouseLeave={onMouseLeaveFunc}>
            <img src="/external-link-white.svg" alt="Link to this website" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

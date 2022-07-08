import styles from "./EducationMileStone.module.css";

const EducationMileStone = ({ milestone }) => {
  return (
    <li className={styles.EducationMileStone}>
      <div className={styles.content}>
        <h2>{milestone.title}</h2>
        <p>{milestone.address} </p>

        {milestone.highlights &&
          milestone.highlights.map((highlight) => (
            <p key={highlight} className={styles.highlight}>
              {highlight}
            </p>
          ))}
      </div>
      <div className={styles.time}>
        <h4>{milestone.year}</h4>
      </div>
    </li>
  );
};

export default EducationMileStone;

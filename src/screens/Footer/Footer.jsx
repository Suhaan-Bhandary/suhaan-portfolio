import styles from "./Footer.module.css";
import personalUrls from "../../assets/data/PersonalUrls.json";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div>
        <h3>Suhaan's Portfolio</h3>
        <p>Thank you for visiting my personal portfolio website.</p>
        <p>
          Connect with me over <a href={personalUrls.linkedIn}>LinkedIn</a>.
        </p>
        <p>Keep Exploring, Keep Coding!</p>
      </div>
      <div className={styles.credit}>
        <h3>Designed with ❤️ by Suhaan Bhandary</h3>
      </div>
    </div>
  );
};

export { Footer };

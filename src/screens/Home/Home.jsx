import styles from "./Home.module.css";
import Avatar from "./components/Avatar/Avatar";

import Resume from "../../assets/document/Resume.pdf";

const Home = () => {
  return (
    <section className={styles.Home}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi! I Am <span>Suhaan Bhandary</span>
        </h1>
        <h3 className={styles.subTitle}>
          I Am Into <span>Web Development</span>{" "}
        </h3>

        <div className={styles.btnContainer}>
          <a href="#Projects" className={styles.btn}>
            Explore
          </a>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Resume
          </a>
        </div>
      </div>

      <Avatar />
    </section>
  );
};

export { Home };

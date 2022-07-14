import styles from "./Home.module.css";
import Avatar from "./components/Avatar/Avatar";

import { Link } from "react-scroll";
import Resume from "../../assets/document/Resume.pdf";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <section className={styles.Home} name="Home">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi! I Am <span>Suhaan Bhandary</span>
        </h1>
        <h3 className={styles.subTitle}>
          I Am Into <span>Web Development</span>{" "}
        </h3>

        <div className={styles.btnContainer}>
          <Button isLink={true}>
            <Link
              to="Projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Explore
            </Link>
          </Button>
          <Button link={Resume}>Resume</Button>
        </div>
      </div>

      <Avatar />
    </section>
  );
};

export { Home };

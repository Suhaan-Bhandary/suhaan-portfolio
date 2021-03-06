import { UseActiveOnScroll } from "../../hooks/useActiveOnScroll";
import styles from "./About.module.css";

import Resume from "../../assets/document/Resume.pdf";
import Button from "../../components/Button/Button";

const About = () => {
  const { observerRef: sectionRef, isVisible } = UseActiveOnScroll(0.3);

  return (
    <section
      className={`${styles.About} ${isVisible ? "active" : ""}`}
      name="About"
      ref={sectionRef}
    >
      <h1 className="section-header" style={{ "--x": "5%", "--y": "0rem" }}>
        About
      </h1>

      <div className={styles.content}>
        <p>
          Hi!, I am Suhaan Bhandary, and currently studying Computer Engineering
          at KKWIEER.
        </p>
        <p>I am Core Commitee Member at MIBCS Club.</p>
        <p>I enjoy building websites and exploring new technologies.</p>

        <p>
          In my Second Year of College I picked up a habit of solving atleast
          One Problem Daily.
        </p>
        <p className={styles.email}>
          Let's Start a Conversation:
          <a href="mailto:suhaanbhandary1@gmail.com?subject=Hi!">
            suhaanbhandary1@gmail.com
          </a>
        </p>
        <Button link={Resume}>Resume</Button>
      </div>
    </section>
  );
};

export { About };

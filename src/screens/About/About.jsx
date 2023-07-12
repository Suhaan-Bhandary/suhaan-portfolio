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
        <p>
          My area of interest is in Software Deployment focused on building and
          solving problems. Up-to-date with leading-edge technologies, efficient
          and diligent in problem solving. Adaptive to new work environments and
          changes to current projects.
        </p>
        <p>
          I enjoy solving problem and also creating automation scripts using
          python.
        </p>
        <p>
          In my Second Year of College I started a habit of solving minimum One
          Problem Daily which helped me to improve my problem solving and
          development skill.
        </p>
        <p>
          Leetcode:{" "}
          <a href="https://leetcode.com/suhaanbhandary1/">suhaanbhandary1</a>
        </p>
        <p className={styles.email}>
          Let's Start a Conversation:
          <a href="https://www.linkedin.com/in/suhaan-bhandary">
            Suhaan Bhandary
          </a>
        </p>
        <Button link={Resume}>Resume</Button>
      </div>
    </section>
  );
};

export { About };

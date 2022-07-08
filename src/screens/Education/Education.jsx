import { UseActiveOnScroll } from "../../hooks/useActiveOnScroll";
import EducationMileStone from "./components/EducationMileStone/EducationMileStone";

import styles from "./Education.module.css";

// Education Data
import EducationData from "../../assets/data/Education.json";

const Education = () => {
  const { observerRef: sectionRef, isVisible } = UseActiveOnScroll(0.4);

  return (
    <section
      className={`${styles.Education} ${isVisible ? "active" : ""}`}
      name="Education"
      ref={sectionRef}
    >
      <h1 className="section-header" style={{ "--x": "5%", "--y": "1rem" }}>
        Education
      </h1>
      <div className={styles.timeline}>
        <ul>
          {EducationData &&
            EducationData.milestones.map((milestone) => <EducationMileStone key={milestone.title} milestone={milestone} />)}

            {/* The below is used to clear the flot from both the sides */}
          <div style={{ clear: "both" }}></div>
        </ul>
      </div>
    </section>
  );
};

export { Education };

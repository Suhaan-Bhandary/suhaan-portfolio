import Atropos from "atropos/react";
import "atropos/css";

import styles from "./Project.module.css";

const Project = ({ project }) => {
  return (
    <div className={styles.Project}>
      <Atropos className={styles.imageContainer} shadowScale={0.8}>
        <img
          src={`${project.imageSrc}`}
          alt={project.imageInfo}
          data-atropos-offset="0"
        />
        <p className={styles.date}>
          Create On: <span>{project.date}</span>
        </p>
      </Atropos>
      <div className={styles.projectInfo}>
        <h2>{project.title}</h2>

        <div className={styles.container}>
          <p className={styles.description}>{project.description}</p>

          <ul className={styles.techStack}>
            <p>Tech Stack</p>
            {project.techStack &&
              project.techStack.map((tech) => <li key={tech}>{tech}</li>)}
            {!project.techStack && <li>Tech Stack Not Found</li>}
          </ul>

          <div className={styles.btnContainer}>
            <a
              href={project.codeUrl}
              className={styles.btnCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
            <a
              href={project.liveUrl}
              className={styles.btnLive}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

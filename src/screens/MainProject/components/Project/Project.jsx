import Atropos from "atropos/react";
import "atropos/css";

import styles from "./Project.module.css";
import Button from "../../../../components/Button/Button";

const Project = ({ project }) => {
  return (
    <div className={styles.Project}>
      <Atropos className={styles.imageContainer} shadowScale={0.8}>
        <picture>
          <source
            srcSet={require("../../../../assets/images/MainProjects" +
              project.imageSrcWebP)}
            type="image/webp"
          />
          <img
            src={require("../../../../assets/images/MainProjects" +
              project.imageSrc)}
            alt={project.imageInfo}
            data-atropos-offset="0"
          />
        </picture>
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
            {project.codeUrl && <Button link={project.codeUrl}>Code</Button>}
            {project.liveUrl && <Button link={project.liveUrl}>Live</Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

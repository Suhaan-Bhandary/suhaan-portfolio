import Atropos from "atropos/react";
import "atropos/css";

import styles from "./Project.module.css";
import Button from "../../../../components/Button/Button";

const Project = ({ project }) => {
  // The imageWithEffect is conditionally to the anchor tag if a link exits
  const imageWithEffect = (
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
        Date: <span>{project.date}</span>
      </p>
    </Atropos>
  );

  return (
    <div className={styles.Project}>
      {/* Adding anchor tag if link is present */}
      {project.liveUrl || project.codeUrl ? (
        <a
          href={project.liveUrl || project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.imageLink}`}
        >
          {imageWithEffect}
        </a>
      ) : (
        imageWithEffect
      )}

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

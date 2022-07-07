import React from "react";
import styles from "./Project.module.css";

const Project = ({ project }) => {
  return (
    <div
      className={styles.Project}
      style={{ "backgroundImage": `url(${project.imageSrc})` }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
        <p>{project.description}</p>
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
  );
};

export default Project;
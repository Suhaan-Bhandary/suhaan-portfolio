import styles from "./Project.module.css";
import Button from "../../../../components/Button/Button";

const Project = ({ project }) => {
  return (
    <div
      className={styles.Project}
      style={{
        backgroundImage: `url(${require("../../../../assets/images/OtherProjects" +
          project.imageSrcWebP)}), url(${require("../../../../assets/images/OtherProjects" +
          project.imageSrcWebP)})`,
      }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
        <p>{project.description}</p>
        <div className={styles.btnContainer}>
          {project.codeUrl && <Button link={project.codeUrl}>Code</Button>}
          {project.liveUrl && <Button link={project.liveUrl}>Live</Button>}
        </div>
      </div>
    </div>
  );
};

export default Project;

import styles from "./SkipToMainContent.module.css";

const SkipToMainContent = ({ to }) => {
  return <a href={to} className={styles.SkipToMainContent}>Skip to Main Content</a>;
};

export default SkipToMainContent;

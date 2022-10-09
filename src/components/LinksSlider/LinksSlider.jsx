import { useLocalStorage } from "./hooks/useLocalStorage";
import styles from "./LinksSlider.module.css";

import { SiGmail, SiLeetcode } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiOutlinePlus } from "react-icons/ai";

// Importing the personal urls
import personalUrls from "../../assets/data/PersonalUrls.json";

const LinksSlider = () => {
  const [isNavOpen, setIsNavOpen] = useLocalStorage("navbar-open-status", true);

  // Function to open nav when it is in focus
  const handleOnFocus = () => {
    setIsNavOpen(true);
  };

  return (
    <nav
      className={`${styles.LinksSlider} ${isNavOpen ? styles.open : ""}`}
      onFocus={handleOnFocus}
    >
      <div className={styles.navContent}>
        <div
          className={styles.toggleBtn}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <AiOutlinePlus />
        </div>

        <span style={{ "--id": "5" }}>
          <a
            href={personalUrls.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            title="linkedin"
          >
            <AiFillLinkedin fill="#0e76a8" className={styles.icon} />
          </a>
        </span>
        <span style={{ "--id": "4" }}>
          <a
            href={personalUrls.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            title="github"
          >
            <AiFillGithub className={styles.icon} />
          </a>
        </span>

        <span style={{ "--id": "3" }}>
          <a
            href={personalUrls.leetCode}
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode"
          >
            <SiLeetcode className={styles.icon} />
          </a>
        </span>

        <span style={{ "--id": "2" }}>
          <a
            href={personalUrls.youtube}
            target="_blank"
            rel="noopener noreferrer"
            title="youtube"
          >
            <BsYoutube fill="#c4302b" className={styles.icon} />
          </a>
        </span>
        <span style={{ "--id": "1" }}>
          <a
            href={`mailto:${personalUrls.email}?subject=Hi Suhaan`}
            title="Gmail"
          >
            <SiGmail fill="#bb001b" className={styles.icon} />
          </a>
        </span>
      </div>
    </nav>
  );
};

export default LinksSlider;

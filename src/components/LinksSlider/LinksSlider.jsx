import { useState } from "react";
import styles from "./LinksSlider.module.css";

import { SiGmail, SiLeetcode } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiOutlinePlus } from "react-icons/ai";

const LinksSlider = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <nav className={`${styles.LinksSlider} ${isNavOpen ? styles.open : ""}`}>
      <div className={styles.navContent}>
        <div
          className={styles.toggleBtn}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <AiOutlinePlus />
        </div>

        <span style={{ "--id": "5" }}>
          <a
            href="https://www.linkedin.com/in/suhaan-bhandary"
            target="_blank"
            rel="noopener noreferrer"
            title="linkedin"
          >
            <AiFillLinkedin fill="#0e76a8" className={styles.icon} />
          </a>
        </span>
        <span style={{ "--id": "4" }}>
          <a
            href="https://github.com/Suhaan-Bhandary"
            target="_blank"
            rel="noopener noreferrer"
            title="github"
          >
            <AiFillGithub className={styles.icon} />
          </a>
        </span>

        <span style={{ "--id": "3" }}>
          <a href="https://leetcode.com/suhaanbhandary1/"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode">
            <SiLeetcode className={styles.icon} />
          </a>
        </span>

        <span style={{ "--id": "2" }}>
          <a
            href="https://www.youtube.com/channel/UCHfmmdKuRDmZ5EUzGdqI7-Q"
            target="_blank"
            rel="noopener noreferrer"
            title="youtube"
          >
            <BsYoutube fill="#c4302b" className={styles.icon} />
          </a>
        </span>
        <span style={{ "--id": "1" }}>
          <a
            href="mailto:Suhaanbhandary1@gmail.com?subject=Hi Suhaan"
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

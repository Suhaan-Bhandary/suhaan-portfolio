import { useState } from "react";
import { useScrollHandler } from "./hooks/useScrollHandler";
import { useDocumentTitle } from "./hooks/useDocumentTitle";

import styles from "./Navbar.module.css";

import { Link } from "react-scroll";
import { BiMenu, BiX } from "react-icons/bi";

const sectionNames = [
  { name: "Home", offset: -100 },
  { name: "About", offset: -80 },
  { name: "Skills", offset: -250 },
  { name: "Projects", offset: -80 },
  { name: "Education", offset: -80 },
];

const Navbar = () => {
  const scroll = useScrollHandler(80);
  const [showMenu, setShowMenu] = useState(false);
  const setDocumentTitle = useDocumentTitle("Suhaan's Portfolio");

  return (
    <nav className={`${styles.Navbar} ${scroll ? styles.sticky : ""}`}>
      <div className={styles.headerContainer}>
        <p className={styles.logo}>Suhaan</p>
        <div
          className={`${styles.toggle} ${showMenu ? styles.active : ""}`}
          onClick={() => setShowMenu(() => !showMenu)}
        >
          <BiMenu className={`${styles.icon} ${styles.menuIcon}`} />
          <BiX className={`${styles.icon} ${styles.closeIcon}`}  />
        </div>
      </div>

      <ul className={`${styles.menu} ${showMenu ? styles.active : ""}`}>
        {sectionNames.map(({ name, offset }) => {
          return (
            <li key={name}>
              <Link
                activeClass={styles.active}
                to={name}
                spy={true}
                smooth={true}
                duration={500}
                offset={offset}
                onClick={() => setShowMenu(() => !showMenu)}
                onSetActive={() =>
                  setDocumentTitle(`Suhaan's Portfolio | ${name}`)
                }
                className={name === "Projects" ? styles.projectLink : ""}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import styles from "./Button.module.css";

const Button = ({ isLink = false, link, children }) => {
  // If link then simply add the class and return it
  if (isLink) {
    const StyledChildren = () =>
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          className: `${child.props.className} ${styles.btn}`,
        })
      );

    return <StyledChildren />;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
    >
      {children}
    </a>
  );
};

export default Button;

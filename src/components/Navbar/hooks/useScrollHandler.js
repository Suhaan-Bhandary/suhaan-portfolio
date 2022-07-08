import { useEffect, useState } from "react";

const useScrollHandler = (distance) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > distance;
      setScroll(scrollCheck);
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll, distance]);

  return scroll;
};

export {useScrollHandler};
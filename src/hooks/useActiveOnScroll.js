import { useEffect, useRef, useState } from "react";

const UseActiveOnScroll = (threshold = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: threshold }
    );

    observer.observe(observerRef.current);
  }, [threshold]);

  return { observerRef, isVisible };
};

export { UseActiveOnScroll };

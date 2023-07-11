import { useEffect, useRef } from "react";

export const useAnimationSlider = () => {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();

    containerRef.current.addEventListener("mouseenter", stopAutoSlide);
    containerRef.current.addEventListener("mouseleave", startAutoSlide);

    return () => {
      containerRef.current.removeEventListener("mouseenter", stopAutoSlide);
      containerRef.current.removeEventListener("mouseleave", startAutoSlide);
    };
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      const container = containerRef.current;
      container.style.transition = "transform 0.01s ease";
      if (window.innerWidth < 600) {
        container.style.transform = `translateX(-100%)`;
      } else if (window.innerWidth < 900) {
        container.style.transform = `translateX(-50%)`;
      } else if (window.innerWidth < 1280) {
        container.style.transform = `translateX(-33%)`;
      } else {
        container.style.transform = `translateX(-25%)`;
      }
    }, 2000);
  };

  const handleTransitionEnd = () => {
    const container = containerRef.current;
    container.style.transition = "none";
    container.appendChild(container.firstElementChild);
    container.style.transform = "translateX(0)";
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };
  return { containerRef, handleTransitionEnd };
};

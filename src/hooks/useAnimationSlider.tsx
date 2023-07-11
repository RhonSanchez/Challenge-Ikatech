import { useRef, useEffect } from "react";

export const useAnimationSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number>(0);

  useEffect(() => {
    startAutoSlide();

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", stopAutoSlide);
      container.addEventListener("mouseleave", startAutoSlide);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", stopAutoSlide);
        container.removeEventListener("mouseleave", startAutoSlide);
      }
      clearInterval(intervalRef.current);
    };
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      const container = containerRef.current;
      if (container) {
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
      }
    }, 2000);
  };

  const handleTransitionEnd = () => {
    const container = containerRef.current;
    if (container) {
      container.style.transition = "none";
      container.appendChild(container.firstElementChild as Node);
      container.style.transform = "translateX(0)";
    }
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  return { containerRef, handleTransitionEnd };
};

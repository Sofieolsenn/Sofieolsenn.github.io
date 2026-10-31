"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import styles from "./Slideshow.module.css";

// Cross-fades between images. It only advances while it is on screen,
// and not at all for visitors who prefer reduced motion.
export default function Slideshow({ images, interval = 3500, sizes }) {
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.5 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!visible || reduceMotion || images.length < 2) return;
    const timer = setInterval(() => setCurrent((index) => (index + 1) % images.length), interval);
    return () => clearInterval(timer);
  }, [visible, interval, images.length]);

  return (
    <div className={styles.slideshow} ref={ref}>
      {images.map((image, index) => (
        <Image
          key={image.src}
          className={`${styles.slide} ${index === current ? styles.current : ""}`}
          src={withBasePath(image.src)}
          alt={image.alt}
          fill
          sizes={sizes}
          aria-hidden={index !== current}
        />
      ))}
      {images.length > 1 && (
        <div className={styles.dots}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`${styles.dot} ${index === current ? styles.activeDot : ""}`}
              aria-label={`Show image ${index + 1} of ${images.length}`}
              aria-pressed={index === current}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

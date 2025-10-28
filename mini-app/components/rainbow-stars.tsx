"use client";

import { useEffect, useState } from "react";
import styles from "./rainbow-stars.module.css";

const Star = ({ style }: { style: React.CSSProperties }) => (
  <span className={styles.star} style={style} />
);

export default function RainbowStars() {
  const [stars, setStars] = useState<
    { top: number; left: number; size: number; delay: number }[]
  >([]);

  useEffect(() => {
    const count = 120;
    const arr = Array.from({ length: count }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2,
    }));
    setStars(arr);
  }, []);

  return (
    <div className={styles.container}>
      {stars.map((s, i) => (
        <Star
          key={i}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

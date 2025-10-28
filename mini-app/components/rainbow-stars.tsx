"use client";

import { useEffect, useState } from "react";
import styles from "./rainbow-stars.module.css";

const StarEmoji = ({ style }: { style: React.CSSProperties }) => (
  <span className={styles.star} style={style} role="img" aria-label="star">
    ⭐
  </span>
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
        <StarEmoji
          key={i}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            fontSize: `${s.size * 10}px`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

import styles from "./MouseCursor.module.scss";
import React, { useState, useEffect } from "react";

export default function MouseCursor() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{
        transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
      }}
    />
  );
}

"use client";
import React, { useEffect, useState } from "react";

function Heart() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 25 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${3 + Math.random() * 5}s`,
      delay: `${Math.random() * 2}s`,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div>
      {hearts.map((style, i) => (
        <span
          key={i}
          className="absolute text-red-500 text-3xl animate-float"
          style={{
            top: style.top,
            left: style.left,
            animationDuration: style.duration,
            animationDelay: style.delay,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}

export default Heart;

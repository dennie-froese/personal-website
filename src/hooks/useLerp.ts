import { useState, useEffect } from "react";

export default function useLerp(start: number, end: number) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return Math.floor(start * (1 - width / 1600) + (end * width) / 1600);
}

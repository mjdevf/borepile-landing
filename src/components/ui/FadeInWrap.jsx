"use client";
import { useEffect, useRef, useState } from "react";

export default function FadeInWrap({ children, className = "", delay = 0, as: Tag = "div", ...props }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); obs.disconnect(); } },
      { rootMargin: "0px 0px 100px 0px", threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${className}${show ? " ani-fade-in-up" : " opacity-0"}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function GenderBanner({ to, image, label, eyebrow = "Para o treino", side = "right" }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealed = hovered || inView;

  return (
    <Link
      ref={ref}
      to={to}
      className={`gender-banner gender-banner-${side} ${revealed ? "gender-banner-revealed" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="gender-photo-clip">
        <img src={image} alt="" className="gender-photo" aria-hidden="true" />
      </div>
      <div className="gender-sweep" aria-hidden="true" />
      <span className="mono gender-eyebrow">{eyebrow}</span>
      <span className="gender-title">{label}</span>
      <span className="mono gender-cta">Comprar agora →</span>
    </Link>
  );
}

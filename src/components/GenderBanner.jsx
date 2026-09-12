import React from "react";
import { Link } from "react-router-dom";

export default function GenderBanner({ to, image, label, eyebrow = "Para o treino", side = "right" }) {
  return (
    <Link to={to} className={`gender-banner gender-banner-${side}`}>
      <div className="gender-bg-anim" aria-hidden="true">
        <span className="gender-orb gender-orb-1" />
        <span className="gender-orb gender-orb-2" />
      </div>

      <img src={image} alt="" className="gender-photo" aria-hidden="true" />

      <span className="mono gender-eyebrow">{eyebrow}</span>
      <span className="gender-title">{label}</span>
      <span className="mono gender-cta">Comprar agora</span>
    </Link>
  );
}

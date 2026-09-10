import React from "react";
import { Link } from "react-router-dom";

export default function PromoBar() {
  return (
    <div className="promo-bar">
      <div className="promo-bar-track">
        <span>ATÉ 45% OFF NA LINHA TREINO</span>
        <span>FRETE GRÁTIS ACIMA DE R$ 199</span>
        <span>TROCA GRÁTIS EM ATÉ 30 DIAS</span>
        <span>ATÉ 45% OFF NA LINHA TREINO</span>
        <span>FRETE GRÁTIS ACIMA DE R$ 199</span>
        <span>TROCA GRÁTIS EM ATÉ 30 DIAS</span>
      </div>
      <Link to="/loja" className="promo-bar-cta mono">
        Ver ofertas →
      </Link>
    </div>
  );
}

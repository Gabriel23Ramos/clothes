import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="wrap section" style={{ textAlign: "center" }}>
      <p className="eyebrow mono" style={{ justifyContent: "center" }}>Erro 404</p>
      <h2 style={{ marginTop: 14 }}>Essa página não existe.</h2>
      <Link to="/" className="btn-primary mono" style={{ marginTop: 24, display: "inline-flex" }}>
        Voltar pro início →
      </Link>
    </section>
  );
}

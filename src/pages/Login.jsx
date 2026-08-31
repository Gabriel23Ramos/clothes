import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { signUp, logIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const notice = location.state?.notice;
  const redirectTo = location.state?.from || "/";

  function handleChange(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const result = mode === "login" ? logIn(form) : signUp(form);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    navigate(redirectTo);
  }

  return (
    <section className="wrap section" style={{ maxWidth: 440 }}>
      <div className="section-head" style={{ marginBottom: 32 }}>
        <div>
          <p className="eyebrow mono">Conta</p>
          <h2>{mode === "login" ? "Entrar" : "Criar conta"}</h2>
        </div>
      </div>

      {notice && <p className="auth-notice mono">{notice}</p>}

      <div className="auth-tabs">
        <button
          className={`mono ${mode === "login" ? "auth-tab-active" : ""}`}
          onClick={() => { setMode("login"); setError(""); }}
        >
          Entrar
        </button>
        <button
          className={`mono ${mode === "signup" ? "auth-tab-active" : ""}`}
          onClick={() => { setMode("signup"); setError(""); }}
        >
          Criar conta
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {mode === "signup" && (
          <input
            type="text"
            placeholder="Nome completo"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="seu@email.com"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
          required
        />

        {error && <p className="mono error-text">{error}</p>}

        <button type="submit" className="btn-full mono">
          {mode === "login" ? "Entrar" : "Criar conta"}
        </button>
      </form>

      <p className="mono muted" style={{ fontSize: 11, marginTop: 20, lineHeight: 1.6 }}>
        Protótipo de demonstração: os dados de conta ficam salvos só neste navegador, sem backend real por trás.
      </p>
    </section>
  );
}

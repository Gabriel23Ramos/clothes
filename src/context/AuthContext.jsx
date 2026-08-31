import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const ACCOUNT_KEY = "urbanvest:account";

export function AuthProvider({ children }) {
  const [account, setAccount] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(ACCOUNT_KEY);
      if (stored) setAccount(JSON.parse(stored));
    } catch (err) {
      setAccount(null);
    }
    setLoaded(true);
  }, []);

  function persist(data) {
    setAccount(data);
    localStorage.setItem(ACCOUNT_KEY, JSON.stringify(data));
  }

  function signUp({ name, email, password }) {
    if (!name.trim() || !email.trim() || password.length < 4) {
      return { ok: false, error: "Preencha nome, e-mail e uma senha com pelo menos 4 caracteres." };
    }
    const newAccount = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
      loggedIn: true,
    };
    persist(newAccount);
    return { ok: true };
  }

  function logIn({ email, password }) {
    if (!account) {
      return { ok: false, error: "Ainda não existe conta salva neste navegador. Crie uma conta primeiro." };
    }
    const emailMatch = email.trim().toLowerCase() === account.email;
    const passwordMatch = password === account.password;
    if (!emailMatch || !passwordMatch) {
      return { ok: false, error: "E-mail ou senha incorretos." };
    }
    persist({ ...account, loggedIn: true });
    return { ok: true };
  }

  function logOut() {
    if (!account) return;
    persist({ ...account, loggedIn: false });
  }

  const isLoggedIn = Boolean(account && account.loggedIn);

  const value = { account, isLoggedIn, signUp, logIn, logOut, loaded };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth precisa estar dentro de um AuthProvider");
  return ctx;
}

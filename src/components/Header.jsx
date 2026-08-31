import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, User, LogOut } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { totalItems } = useCart();
  const { account, isLoggedIn, logOut } = useAuth();
  const navigate = useNavigate();

  function handleLogOut() {
    logOut();
    navigate("/");
  }

  return (
    <header className="site-header">
      <div className="wrap navbar">
        <Link to="/" className="brand">
          <div className="brand-text">
            Urban Vest
            <span>STORE — LANÇAMENTO 01</span>
          </div>
        </Link>

        <nav className="nav-links">
          <Link to="/">Início</Link>
          <Link to="/loja">Loja</Link>

          {isLoggedIn ? (
            <div className="account-pill">
              <span className="mono">
                <User size={14} /> {account.name.split(" ")[0]}
              </span>
              <button onClick={handleLogOut} aria-label="Sair da conta" className="icon-btn">
                <LogOut size={14} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-link">
              <User size={14} /> Entrar
            </Link>
          )}

          <Link to="/carrinho" className="cart-btn">
            <ShoppingBag size={15} />
            SACOLA · {totalItems}
          </Link>
        </nav>
      </div>
    </header>
  );
}

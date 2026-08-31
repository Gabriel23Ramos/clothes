import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, User, LogOut, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { CATEGORIES } from "../data/products";

export default function Header() {
  const { totalItems } = useCart();
  const { account, isLoggedIn, logOut } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLogOut() {
    logOut();
    navigate("/");
  }

  function goToCategory(cat) {
    setMenuOpen(false);
    navigate(cat === "Todos" ? "/loja" : `/loja?categoria=${encodeURIComponent(cat)}`);
  }

  return (
    <header className="site-header">
      <div className="wrap navbar">
        <Link to="/" className="brand">
          <img src="/logo.png" alt="Urban Vest Store" className="brand-logo" />
        </Link>

        <nav className="nav-links">
          <Link to="/">Início</Link>

          <div className="category-menu" ref={menuRef}>
            <button
              className="category-menu-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
            >
              Categorias <ChevronDown size={13} />
            </button>
            {menuOpen && (
              <div className="category-dropdown">
                {CATEGORIES.map((cat) => (
                  <button key={cat} onClick={() => goToCategory(cat)} className="mono">
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

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

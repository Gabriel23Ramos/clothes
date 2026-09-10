import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, User, LogOut, ChevronDown, Heart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../context/FavoritesContext";
import { CATEGORIES } from "../data/products";

export default function Header() {
  const { totalItems } = useCart();
  const { account, isLoggedIn, logOut } = useAuth();
  const { totalFavorites } = useFavorites();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
    setMobileOpen(false);
  }

  function goToCategory(cat) {
    setMenuOpen(false);
    setMobileOpen(false);
    navigate(cat === "Todos" ? "/loja" : `/loja?categoria=${encodeURIComponent(cat)}`);
  }

  return (
    <header className="site-header">
      <div className="wrap navbar">
        <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
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
        </nav>

        <div className="header-actions">
          <Link to="/favoritos" className="favorites-link" aria-label="Favoritos">
            <Heart size={18} />
            {totalFavorites > 0 && <span className="favorites-count mono">{totalFavorites}</span>}
          </Link>

          <Link to="/carrinho" className="cart-btn">
            <ShoppingBag size={15} />
            <span className="cart-btn-label">SACOLA · {totalItems}</span>
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-nav">
          <Link to="/" onClick={() => setMobileOpen(false)}>Início</Link>
          <Link to="/loja" onClick={() => setMobileOpen(false)}>Loja</Link>

          <p className="mono mobile-nav-label">Categorias</p>
          <div className="mobile-nav-categories">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => goToCategory(cat)} className="mono">
                {cat}
              </button>
            ))}
          </div>

          {isLoggedIn ? (
            <button onClick={handleLogOut} className="mobile-nav-account">
              <LogOut size={14} /> Sair ({account.name.split(" ")[0]})
            </button>
          ) : (
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <User size={14} style={{ marginRight: 8 }} /> Entrar
            </Link>
          )}
        </div>
      )}
    </header>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { InstagramIcon, WhatsAppIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="footer-full">
      <div className="wrap footer-columns">
        <div className="footer-brand">
          <p className="brand-text" style={{ fontSize: 18 }}>Urban Vest Store</p>
          <p className="mono muted" style={{ marginTop: 10, fontSize: 12.5, lineHeight: 1.7 }}>
            A linha de treino feita pra quem não para. Compressão, respiro e reflexivo em
            todas as peças.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon size={19} />
            </a>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon size={19} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="mono">Institucional</h4>
          <Link to="/">Quem somos</Link>
          <a href="#">Blog</a>
          <a href="#">Afiliados</a>
        </div>

        <div className="footer-col">
          <h4 className="mono">Políticas</h4>
          <a href="#">Termos de privacidade</a>
          <a href="#">Política de entrega</a>
          <a href="#">Trocas e devoluções</a>
        </div>

        <div className="footer-col">
          <h4 className="mono">Ajuda</h4>
          <a href="#">FAQ</a>
          <a href="#">Central de atendimento</a>
          <Link to="/favoritos">Favoritos</Link>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p className="mono muted">© 2026 Urban Vest Store. CNPJ: 00.000.000/0001-00</p>
        <p className="mono muted">
          Site feito por{" "}
          <a href="https://gabrielresume.vercel.app/" target="_blank" rel="noopener noreferrer" className="footer-credit">
            Gabriel
          </a>
        </p>
      </div>
    </footer>
  );
}

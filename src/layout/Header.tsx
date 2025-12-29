import logo from "/images/diya-logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">

      {/* TOP BAR */}
      <div className="top-bar">
        <img src={logo} alt="Diya International" className="logo" />

        <div className="actions">
          <button className="account-btn">Account</button>
          <button className="cart-btn">Rs. 0.00 (0)</button>

          {/* Hamburger */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* NAV BAR */}
      <nav className={`nav-bar ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/makhana-story" className="nav-link" onClick={() => setMenuOpen(false)}>Makhana Story</Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </nav>

    </header>
  );
}

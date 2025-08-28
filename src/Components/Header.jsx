import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [showHelpHint, setShowHelpHint] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const cartCount = useSelector((state) => state.cart.products.length);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const onScroll = () => setShowScrollBtn(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const underline = document.getElementById("underline");
    const activeLink = document.querySelector(".nav-link.active");
    if (underline && activeLink) {
      underline.style.width = `${activeLink.offsetWidth}px`;
      underline.style.left = `${activeLink.offsetLeft}px`;
    }
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setShowHelpHint(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const openWhatsApp = () => window.open("https://wa.me/919876543210", "_blank");
  const openChat = () => alert("Chat coming soon!");

  return (
    <>
      {/* ─── Desktop Header ───────────────────── */}
      <div className="sticky-wrapper desktop-header">
        <header className="main-header">
          <div className="logo" onClick={handleLogoClick}>
            <img src="src/assets/logo.png" alt="logo" />
          </div>

          <nav className="nav-links">
            {["/", "/service", "/product", "/support", "/contact"].map((path, idx) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              >
                {["Home", "Service", "Products", "Supports", "Contact"][idx]}
              </NavLink>
            ))}
            <div id="underline" className="underline" />
          </nav>

          <div className="header-right">
            {/* Disabled Search Box */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Search disabled"
                value={searchInput}
                onChange={() => {}} // 🔒 do nothing
                onKeyDown={(e) => e.preventDefault()} // 🔒 block Enter
                disabled // 🔒 disable typing
              />
              <i className="fas fa-search search-icon" />
            </div>

            <NavLink to="/wishlist" className="icon-btn">
              <i className="fas fa-heart" />
            </NavLink>

           {/* Cart Icon (view only, no click) */}
{/* Cart Icon (no count, no navigation) */}
<div className="icon-btn cart-icon" title="Cart (view disabled)">
  <i className="fas fa-shopping-cart" />
</div>


          </div>
        </header>
      </div>

      {/* ─── Mobile Header ───────────────────── */}
      <div className="mobile-header">
        <div className="mobile-header-top">
          <div className="logo" onClick={handleLogoClick}>
            <img src="src/assets/logo.png" alt="logo" />
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search disabled"
              value={searchInput}
              onChange={() => {}} // 🔒 no-op
              onKeyDown={(e) => e.preventDefault()} // 🔒 block enter
              disabled
            />
            <i className="fas fa-search search-icon" />
          </div>

          <div className="mobile-icons">
            <NavLink to="/wishlist" className="icon-btn">
              <i className="fas fa-heart" />
            </NavLink>
            <NavLink to="/cart" className="icon-btn cart-icon">
              <i className="fas fa-shopping-cart" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </NavLink>
          </div>
        </div>

        <nav className="mobile-nav">
          {["/", "/service", "/product", "/support", "/contact"].map((path, idx) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {["Home", "Service", "Products", "Supports", "Contact"][idx]}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* ─── Help Hint ───────────────────── */}
      {showScrollBtn && showHelpHint && (
        <div className="help-hint-box">
          <span>💬 Need help? Chat or WhatsApp us!</span>
          <button className="close-hint" onClick={() => setShowHelpHint(false)}>
            &times;
          </button>
        </div>
      )}

      {/* ─── Floating Buttons ───────────────────── */}
      {showScrollBtn && (
        <div className="floating-button-group">
          <button className="floating-btn scroll-btn" onClick={scrollToTop} title="Scroll to Top">
            <i className="fas fa-arrow-up" />
          </button>
          <button className="floating-btn whatsapp-btn" onClick={openWhatsApp} title="Chat on WhatsApp">
            <i className="fab fa-whatsapp" />
          </button>
          <button className="floating-btn chat-btn" onClick={openChat} title="Live Chat">
            💬
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
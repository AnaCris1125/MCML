import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import closeIcon from "../../images/icono-close.svg";
import logo from "../../images/logo-MCM.jpg";

function Header({ loggedIn, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header header--${theme} ${loggedIn ? "logged-in" : ""}`}>
      <div className="header__container">

        <img className="header-logo" src={logo} alt="logo" />

        {/* Botón para menú móvil */}
        <button className="header__burger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <img className="header__burger-close" src={closeIcon} alt="Cerrar menú" />
          ) : (
            <>
              <span className="header__burger-line"></span>
              <span className="header__burger-line"></span>
            </>
          )}
        </button>

        {/* Menú escritorio */}
        <nav className="header__nav-desktop">
          <NavLink to="/" end className={({ isActive }) => isActive ? "header__nav-link active" : "header__nav-link"}>
            Inicio
          </NavLink>
          <NavLink to="/proyectos" className={({ isActive }) => isActive ? "header__nav-link active" : "header__nav-link"}>
            Proyectos
          </NavLink>
          <NavLink to="/servicios" className={({ isActive }) => isActive ? "header__nav-link active" : "header__nav-link"}>
            Servicios
          </NavLink>
          <NavLink to="/nosotros" className={({ isActive }) => isActive ? "header__nav-link active" : "header__nav-link"}>
            Nosotros
          </NavLink>
        </nav>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="header__nav-mobile">
            <NavLink to="/" end className={({ isActive }) => isActive ? "header__nav-link active" : "header__nav-link"} onClick={closeMenu}>
              Inicio
            </NavLink>
            <NavLink to="/proyectos" className={({ isActive }) => isActive ? "header__nav-link active" : "header__nav-link"} onClick={closeMenu}>
              Proyectos
            </NavLink>
            <NavLink to="/servicios" className={({ isActive }) => isActive ? "header__nav-link active" : "header__nav-link"} onClick={closeMenu}>
              Servicios
            </NavLink>
            <NavLink to="/nosotros" className={({ isActive }) => isActive ? "header__nav-link active" : "header__nav-link"} onClick={closeMenu}>
              Nosotros
            </NavLink>
          </div>
        )}

      </div>
    </header>
  );
}

export default Header;

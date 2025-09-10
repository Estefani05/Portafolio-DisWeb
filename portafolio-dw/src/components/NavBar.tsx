import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/colors.css";

export default function NavBar() {
  const base =
    "px-3 py-2 rounded navbar-link"; // Usa la clase navbar-link para los colores
  const cls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? base + " active-link"
      : base;

  return (
    <nav className="navbar">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-bold navbar-link">Portafolio</Link>
        <div className="flex gap-2">
          <NavLink to="/" className={cls}>Inicio</NavLink>
          <NavLink to="/profile" className={cls}>Perfil</NavLink>
          <NavLink to="/courses" className={cls}>Trabajos</NavLink>
        </div>
      </div>
    </nav>
  );
}

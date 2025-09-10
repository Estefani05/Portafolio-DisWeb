import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const base = "px-3 py-2 rounded hover:bg-gray-100";
  const cls = ({ isActive }: { isActive: boolean }) =>
    isActive ? base + " font-semibold text-purple-700" : base;

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-bold">Portafolio</Link>
        <div className="flex gap-2">
          <NavLink to="/" className={cls}>Inicio</NavLink>
          <NavLink to="/profile" className={cls}>Perfil</NavLink>
          <NavLink to="/courses" className={cls}>Trabajos</NavLink>
        </div>
      </div>
    </nav>
  );
}

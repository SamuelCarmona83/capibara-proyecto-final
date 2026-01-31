import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Importamos el hook

export const Navbar = () => {
    // Nos conectamos al store para leer el carrito
    const { store } = useGlobalReducer();

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">

        {/* LEFT: Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          logo
        </Link>

        {/* Right side icons */}
        <div className="d-flex align-items-center gap-3">

          {/* Search (optional) */}
          <button className="btn btn-outline-secondary btn-sm" type="button">
            🔍
          </button>

          {/* Cart */}
          <button className="btn btn-outline-secondary btn-sm" type="button">
            🛒
          </button>

          {/* User */}
          <button className="btn btn-outline-secondary btn-sm" type="button">
            👤
          </button>

          {/* Menu */}
          <button className="btn btn-outline-secondary btn-sm" type="button">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};
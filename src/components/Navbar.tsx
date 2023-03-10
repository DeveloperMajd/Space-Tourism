import { NavLink } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-item">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">-----</div>
        <div className="navbar-end">
          <NavLink to="/" className="navbar-item">
            00 Home
          </NavLink>
          <NavLink to="/destination" className="navbar-item">
            01 Destination
          </NavLink>
          <NavLink to="/crew" className="navbar-item">
            02 Crew
          </NavLink>
          <NavLink to="technology" className="navbar-item">
            03 Technology
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

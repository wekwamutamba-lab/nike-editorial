import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand-logo">NIKE</Link>
      <div className="nav-links">
        <NavLink to="/" end>Index</NavLink>
        <NavLink to="/collection">Collection</NavLink>
        <NavLink to="/about">About</NavLink>
        
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
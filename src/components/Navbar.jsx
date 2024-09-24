// components/Navbar.jsx
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo or Site Name */}
      <div className="logo">
        <span>Book Shop</span>
      </div>
      
      {/* Menu Options and Action Buttons */}
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/blog" className="nav-item">Blog</Link>
        <Link to="/faq" className="nav-item">FAQ</Link>

        {/* Action Buttons */}
        <button className="nav-btn">Buy Book</button>
        <button className="nav-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;


import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">AuraHire</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/interview">Interview</Link></li>
        <li><Link to="/roadmap">Roadmap</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>

      <button className="nav-btn">Get Started</button>
    </nav>
  );
}

export default Navbar;
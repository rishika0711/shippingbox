import { Link } from "react-router-dom";
import './Navbar.css';  

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-item">
        <Link to="/" className="link">Add Box</Link>
        <Link to="/list" className="link">Box List</Link>
        </div>
      </nav>
    );
  };
export default Navbar;
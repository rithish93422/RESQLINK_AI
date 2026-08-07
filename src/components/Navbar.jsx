import { FaShieldAlt, FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className="navbar">

      <div className="logo">
        <FaShieldAlt className="logo-icon" />
        <span>ResQLink AI</span>
      </div>

      <button
        className="login-btn"
        onClick={() => navigate("/login")}
      >
        <FaSignInAlt />
        Login
      </button>

    </nav>
  );
}

export default Navbar;
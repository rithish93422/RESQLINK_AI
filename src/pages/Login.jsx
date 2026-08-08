import { FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/emergency");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">
          <FaShieldAlt />
          <span>ResQLink AI</span>
        </div>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Sign in to continue to ResQLink AI
        </p>

        <div className="login-form">

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
          />

          <button
            type="button"
            className="login-submit"
            onClick={handleLogin}
          >
            Login
          </button>

        </div>

        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

        <p className="login-footer">
          ResQLink AI • Emergency Communication Platform
        </p>

      </div>
    </div>
  );
}

export default Login;
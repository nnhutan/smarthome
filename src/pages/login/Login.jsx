import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import loginImg from "./login.png";
import "./login.scss";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // call api
    setIsLoggedIn(true);
    navigate("/", { replace: true });
  };

  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="container">
        <div className="content">
          <h1 className="title">Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="img">
          <img src={loginImg} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;

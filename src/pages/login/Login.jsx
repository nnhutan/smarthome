import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import loginImg from "./login.png";
import "./login.scss";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="container">
        <div className="content">
          <h1 className="title">Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
              navigate("/", { replace: true });
            }}
          >
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
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

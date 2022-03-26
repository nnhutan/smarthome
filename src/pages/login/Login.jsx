import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          setIsLoggedIn(true);
          navigate("/", { replace: true });
        }}
      >
        Login
      </button>
    </>
  );
};

export default Login;

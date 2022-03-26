import {
  AccountCircle,
  NotificationsNone,
  Settings,
} from "@mui/icons-material";
import "./header.scss";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Header = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  return (
    <div className="header">
      <span className="logo">Smart Home</span>
      <div className="option">
        <span className="icon-wrapper">
          <NotificationsNone className="icon" />
          <div className="dropdown">
            <span className="item">
              Lorem ipsum, dolor sit amet elit conse ctetur adipisicing.
            </span>
            <span className="item">
              Lorem ipsum, dolor sit amet elit conse ctetur adipisicing.
            </span>
            <span className="item">
              Lorem ipsum, dolor sit amet elit conse ctetur adipisicing.
            </span>
          </div>
        </span>
        <span className="icon-wrapper">
          <Settings className="icon" />
          <div className="dropdown">
            <span className="item">
              Lorem ipsum, dolor sit amet elit conse ctetur adipisicing.
            </span>
            <span className="item">
              Lorem ipsum, dolor sit amet elit conse ctetur adipisicing.
            </span>
            <span className="item">
              Lorem ipsum, dolor sit amet elit conse ctetur adipisicing.
            </span>
          </div>
        </span>
        <span className="profile">
          <AccountCircle className="avt" />
          <div className="options">
            <span className="item">Setting</span>
            <span
              className="item"
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Logout
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Header;

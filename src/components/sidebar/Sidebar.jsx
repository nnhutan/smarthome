import {
  BarChart,
  BusinessCenter,
  DeviceThermostat,
  Lightbulb,
  LocalFireDepartment,
  Monitor,
  SensorDoor,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  const styleNavLink = ({ isActive }) => {
    return isActive
      ? {
          backgroundColor: "#f0f0ff",
          textDecoration: "none",
          borderRadius: "20px",
          marginBottom: "8px",
        }
      : {
          textDecoration: "none",
          borderRadius: "20px",
          marginBottom: "8px",
        };
  };

  return (
    <div className="sidebar">
      <div className="dashboard">
        <h4 className="title">Dashboard</h4>
        <div className="list">
          <NavLink to="/" style={styleNavLink}>
            <span className="item">
              <Monitor className="icon" />{" "}
              <span className="text">Theo dõi</span>
            </span>
          </NavLink>
          <NavLink to="/manage" style={styleNavLink}>
            <span className="item">
              <BusinessCenter className="icon" />
              <span className="text">Quản lý</span>
            </span>
          </NavLink>
        </div>
      </div>
      <div className="shortcuts">
        <h4 className="title">Lối tắt</h4>
        <div className="list">
          <NavLink to="/light" style={styleNavLink}>
            <span className="item">
              <Lightbulb className="icon" />
              <span className="text">Quản lý đèn</span>
            </span>
          </NavLink>
          <NavLink to="/temp-humid" style={styleNavLink}>
            <span className="item">
              <DeviceThermostat className="icon" />{" "}
              <span className="text">Nhiệt độ, độ ẩm</span>
            </span>
          </NavLink>
          <NavLink to="/gas" style={styleNavLink}>
            <span className="item">
              <LocalFireDepartment className="icon" />{" "}
              <span className="text">Phát hiện khí Gas</span>
            </span>
          </NavLink>
          <NavLink to="/door" style={styleNavLink}>
            <span className="item">
              <SensorDoor className="icon" />
              <span className="text">Quản lý cửa ra vào</span>
            </span>
          </NavLink>
          <NavLink to="/report" style={styleNavLink}>
            <span className="item">
              <BarChart className="icon" />
              <span className="text">Quản lý báo cáo</span>
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

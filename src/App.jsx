import { Route, Routes } from "react-router-dom";
import {
  Door,
  Gas,
  Home,
  Manage,
  Register,
  Login,
  Report,
  TempHumid,
  Light,
} from "./pages";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<Layout />}>
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Home />} />
              <Route path="manage" element={<Manage />} />
              <Route path="light" element={<Light />} />
              <Route path="temp-humid" element={<TempHumid />} />
              <Route path="gas" element={<Gas />} />
              <Route path="door" element={<Door />} />
              <Route path="report" element={<Report />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

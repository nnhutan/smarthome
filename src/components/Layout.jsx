import { Grid } from "@mui/material";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item lg={2}>
          <Sidebar />
        </Grid>
        <Grid item lg={10}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;

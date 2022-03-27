import "./report.scss";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import data from "./fakeData";
import TempCard from "../../components/report/TempCard";
import { Grid } from "@mui/material";

const Report = () => {
  return (
    <div className="report">
      <div className="overview">
        <h3 className="title"> Tổng quan</h3>
        <div className="chart">
          <LineChart
            width={1050}
            height={300}
            data={data}
            margin={{ top: 12, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />

            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="humid" stroke="#8884d8" />
            <Line type="monotone" dataKey="temp" stroke="#82ca9d" />
          </LineChart>
          <span className="label">
            Nhiệt độ, độ ẩm trung bình trong 30 ngày qua
          </span>
        </div>
      </div>
      <div className="list-report">
        <h3 className="title"> Báo cáo</h3>
        <div className="list-container">
          <Grid container spacing={3}>
            <Grid item md={4}>
              <TempCard />
            </Grid>
            <Grid item md={4}>
              <TempCard />
            </Grid>
            <Grid item md={4}>
              <TempCard />
            </Grid>
            <Grid item md={4}>
              <TempCard />
            </Grid>
            <Grid item md={4}>
              <TempCard />
            </Grid>
            <Grid item md={4}>
              <TempCard />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Report;

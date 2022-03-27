import { useState } from "react";
import "./light.scss";
import Data from "./fakeData";
import OverviewTable from "../../components/light/OverviewTable";
import LogsTable from "../../components/door/LogsTable";

const Light = () => {
  const [data, setData] = useState(Data);

  return (
    <div className="light">
      <div className="overview">
        <h3 className="title">Tổng quan</h3>
        <div className="table">
          <OverviewTable data={data} setData={setData} />
        </div>
      </div>
      <div className="logs">
        <h3 className="title">Nhật ký</h3>
        <div className="table">
          <LogsTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default Light;

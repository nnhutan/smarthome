import { useState } from "react";
import "./tempHumid.scss";
import Data from "./fakeData";
import OverviewTable from "../../components/temp-humid/OverviewTable";
import LogsTable from "../../components/door/LogsTable";

const TempHumid = () => {
  const [data, setData] = useState(Data);

  return (
    <div className="temp-humid">
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

export default TempHumid;

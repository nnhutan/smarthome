import { useState } from "react";
import "./gas.scss";
import Data from "./fakeData";
import OverviewTable from "../../components/door/OverviewTable";
import LogsTable from "../../components/door/LogsTable";

const Gas = () => {
  const [data, setData] = useState(Data);

  return (
    <div className="gas">
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

export default Gas;

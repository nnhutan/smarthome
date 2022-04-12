import { useState, useEffect } from "react";
import "./gas.scss";
import { getData } from "./fetch";
import OverviewTable from "../../components/gas/OverviewTable";
import LogsTable from "../../components/gas/LogsTable";

const Gas = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);
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

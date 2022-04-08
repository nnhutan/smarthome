import { useEffect, useState } from "react";
import "./light.scss";
import {getData} from './fetch'
import OverviewTable from "../../components/light/OverviewTable";
import LogsTable from "../../components/door/LogsTable";

const Light = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      console.log(res)
      setData(res)
    });
  }, [])
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

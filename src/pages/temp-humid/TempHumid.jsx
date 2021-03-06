import { useState, useEffect } from "react";
import "./tempHumid.scss";
import {getData} from './fetch'
import OverviewTable from "../../components/temp-humid/OverviewTable";
import LogsTable from "../../components/temp-humid/LogsTable";


const TempHumid = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      console.log(res)
      setData(res)
    });
    setInterval(()=>{
      getData().then((res) => {
        console.log(res)
        setData(res)
    });}, 1000)
  }, [])
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

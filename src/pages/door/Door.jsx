import { useState, useEffect } from "react";
import "./door.scss";
import Data from "./fakeData";
import OverviewTable from "../../components/door/OverviewTable";
import LogsTable from "../../components/door/LogsTable";

const axios = require('axios');
const config = {
  headers: {
    'X-AIO-Key': 'aio_nTsq28MxeF73f31XpMARar8IoO5t'
  }
}

const origin = 'https://io.adafruit.com/api/v2/giangnam1905'
const getData = async () => {
  const door = await axios.get(origin + '/feeds/bbc-door/data').then((res) => {
    return res.data
  })
  const doorData = [
    {
      id: 1,
      name: "Cửa 1",
      status: door[0].value == 'OPEN',
      start: new Date("2018-01-01T00:00:00.000Z"),
      end: new Date("2018-01-01T00:00:00.000Z"),
      duration: 2,
      log: true,
      listLog: []
    }
  ]
  return doorData
}


const Door = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      console.log(res)
      setData(res)
    });
  }, [])

  return (
    <div className="door">
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

export default Door;

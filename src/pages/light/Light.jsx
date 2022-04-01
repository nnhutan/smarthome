import { useEffect, useState } from "react";
import "./light.scss";
import Data from "./fakeData";
import OverviewTable from "../../components/light/OverviewTable";
import LogsTable from "../../components/door/LogsTable";

////////////////////////////////////////////////////////////////////////////////////////////////////
const axios = require('axios');
const config = {
  headers: {
    'X-AIO-Key': 'aio_nTsq28MxeF73f31XpMARar8IoO5t'
  }
}

const origin = 'https://io.adafruit.com/api/v2/giangnam1905'
const getData = async () => {
  const led1 = await axios.get(origin + '/feeds/bbc-led/data').then((res) => {
    return res.data
  })
  const led2 = await axios.get(origin + '/feeds/bbc-led-1/data').then((res) => {
    return res.data
  })
  const lightData = [
    {
      id: 1,
      name: "Đèn 1",
      status: (led1[0].value == '1'),
      start: new Date("2018-01-01T00:00:00.000Z"),
      end: new Date("2018-01-01T00:00:00.000Z"),
      duration: 2,
      log: true,
      listLog: []
    },
    {
      id: 2,
      name: "Đèn 2",
      status: (led2[0].value == '3'),
      start: new Date("2018-01-01T00:00:00.000Z"),
      end: new Date("2018-01-01T00:00:00.000Z"),
      duration: 15,
      log: false,
      listLog: []
    }
  ]
  return lightData
}

///////////////////////////////////////////////////////////////////////////////////////////////////


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

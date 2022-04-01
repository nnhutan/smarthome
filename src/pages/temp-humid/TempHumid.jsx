import { useState, useEffect } from "react";
import "./tempHumid.scss";
import Data from "./fakeData";
import OverviewTable from "../../components/temp-humid/OverviewTable";
import LogsTable from "../../components/door/LogsTable";

//////////////////////////////////////////////////////////////////////////////////////
const axios = require('axios');
const config = {
  headers: {
    'X-AIO-Key': 'aio_nTsq28MxeF73f31XpMARar8IoO5t'
  }
}

const origin = 'https://io.adafruit.com/api/v2/giangnam1905'
const getData = async () => {
  const temp = await axios.get(origin + '/feeds/bbc-temp/data').then((res) => {
    return res.data
  })
  const humid = await axios.get(origin + '/feeds/bbc-humi/data').then((res) => {
    return res.data
  })

  const tempHumid = [
    {
      id: 1,
      name: "Phòng 1",
      auto: true,
      temp: temp[0].value,
      humid: humid[0].value,
      duration: 2,
      log: true,
      listLog: []
    }
  ]
  return tempHumid
}

const TempHumid = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      console.log(res)
      setData(res)
    });
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

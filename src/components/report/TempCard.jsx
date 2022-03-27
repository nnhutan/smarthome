import { SimCardDownload, Thermostat } from "@mui/icons-material";
import "./reportCard.scss";

const TempCard = () => {
  return (
    <div className="report-card-container">
      <div className="content">
        <h4 className="title-report">Nhiệt độ</h4>
        <div className="desc">
          <span className="item">Cao nhất: 32</span>
          <span className="item">Thấp nhất: 18</span>
          <span className="item">Trung bình: 26</span>
        </div>
      </div>
      <div className="img">
        <Thermostat className="illus" />
        <SimCardDownload className="export-file-icon" />
      </div>
    </div>
  );
};

export default TempCard;

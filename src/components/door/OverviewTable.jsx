import { DataGrid } from "@mui/x-data-grid";
import { changeHandler } from "./handleChange";
import columnsConfig from "./columnsConfig";

const OverviewTable = ({ data, setData }) => {
  const handleChange = changeHandler(setData);
  const columns = columnsConfig(handleChange);

  return (
    <DataGrid autoHeight rows={data} columns={columns} checkboxSelection />
  );
};

export default OverviewTable;

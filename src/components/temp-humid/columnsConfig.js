import { Button, FormControl, NativeSelect, Switch } from "@mui/material";

const columnsConfig = (handleChange) => {
  return [
    {
      field: "id",
      headerName: "ID",
      width: 180,
    },
    {
      field: "name",
      headerName: "Tên phòng",
      width: 200,
    },
    {
      field: "temp",
      headerName: "Nhiệt độ",
      width: 200,
    },
    {
      field: "humid",
      headerName: "Độ ẩm",
      width: 200,
    },
  ];
};

export default columnsConfig;

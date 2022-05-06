import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TimePicker from "@mui/lab/TimePicker";
import { ArrowRight } from "@mui/icons-material";
import {
  Button,
  FormControl,
  NativeSelect,
  Switch,
  TextField,
} from "@mui/material";

const columnsConfig = (handleChange) => {
  return [
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "name",
      headerName: "Tên cửa",
      width: 220,
    },
    {
      field: "status",
      width: 220,
      headerName: "Trạng thái",
      renderCell: (params) => {
        return (
          <Switch
            checked={params.row.status}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        );
      },
    },
    {
      field: "log",
      width: 220,
      headerName: "Theo dõi",
      renderCell: (params) => {
        return (
          <Switch
            checked={params.row.log}
            onChange={(e) =>
              handleChange(params.row.id, { log: e.target.checked }, "log")
            }
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        );
      },
    },
  ];
};

export default columnsConfig;

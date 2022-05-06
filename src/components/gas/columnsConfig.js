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
      headerName: "Phòng",
      width: 220,
    },
    {
      field: "log",
      width: 200,
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
    {
      field: "value",
      headerName: "Nồng độ",
      width: 200,
    },
  ];
};

export default columnsConfig;

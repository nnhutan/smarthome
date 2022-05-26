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
      width: 280,
    },
    {
      field: "name",
      headerName: "Tên cửa",
      width: 320,
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
  ];
};

export default columnsConfig;

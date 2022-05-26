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
      width: 180,
    },
    {
      field: "name",
      headerName: "Phòng",
      width: 320,
    },
    {
      field: "value",
      headerName: "Nồng độ",
      width: 200,
    },
  ];
};

export default columnsConfig;

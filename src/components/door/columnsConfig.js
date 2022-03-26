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
      width: 120,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      renderCell: (params) => {
        return (
          <Switch
            checked={params.row.status}
            onChange={(e) =>
              handleChange(
                params.row.id,
                { status: e.target.checked },
                "status"
              )
            }
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        );
      },
    },
    {
      field: "time",
      headerName: "Thời gian hoạt động",
      width: 300,
      renderCell: (params) => {
        return (
          <div
            className="set-time"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                value={params.row.start}
                onChange={(newValue) => {
                  handleChange(params.row.id, { start: newValue }, "start");
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      width: "132px",
                    }}
                    label="Start"
                    variant="standard"
                  />
                )}
              />
              <ArrowRight />
              <TimePicker
                value={params.row.end}
                onChange={(newValue) => {
                  handleChange(params.row.id, { end: newValue }, "end");
                }}
                renderInput={(params) => (
                  <TextField
                    sx={{ width: "132px" }}
                    {...params}
                    label="End"
                    variant="standard"
                  />
                )}
              />
            </LocalizationProvider>
          </div>
        );
      },
    },
    {
      field: "duration",
      headerName: "Thời gian cảnh báo",
      width: 100,
      renderCell: (params) => {
        return (
          <FormControl>
            <NativeSelect
              defaultValue={params.row.duration}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={(e) => {
                handleChange(
                  params.row.id,
                  { duration: e.target.value },
                  "duration"
                );
              }}
            >
              <option value={2}>2 phút</option>
              <option value={5}>5 phút</option>
              <option value={10}>10 phút</option>
              <option value={15}>15 phút</option>
              <option value={20}>20 phút</option>
            </NativeSelect>
          </FormControl>
        );
      },
    },
    {
      field: "log",
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
      field: "action",
      headerName: "Hành động",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="actions" onClick={(e) => e.stopPropagation()}>
            <Button variant="contained" size="small" color="error">
              Stop
            </Button>
            <Button variant="contained" size="small" color="warning">
              Log
            </Button>
          </div>
        );
      },
    },
  ];
};

export default columnsConfig;

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TimePicker from "@mui/lab/TimePicker";
import { ArrowRight } from "@mui/icons-material";
import "./door.scss";
import Data from "./fakeData";

const Door = () => {
  const [data, setData] = useState(Data);
  const [door, setDoor] = useState("");

  const columns = [
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

  const logsCol = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "time",
      headerName: "Thời gian",
      width: 132,
      renderCell: (params) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Time"
              readOnly
              value={params.row.time}
              renderInput={(params) => (
                <TextField {...params} variant="standard" />
              )}
              onChange={() => {}}
            />
          </LocalizationProvider>
        );
      },
    },
    {
      field: "desc",
      headerName: "Thông tin",
      flex: 1,
    },
  ];

  const handleChange = (id, payload, type) => {
    switch (type) {
      case "status":
        setData((prev) => {
          prev[id - 1].status = payload.status;
          return [...prev];
        });
        break;
      case "start":
        setData((prev) => {
          prev[id - 1].start = payload.start;
          return [...prev];
        });
        break;
      case "end":
        setData((prev) => {
          prev[id - 1].end = payload.end;
          return [...prev];
        });
        break;
      case "duration":
        setData((prev) => {
          prev[id - 1].duration = payload.duration;
          return [...prev];
        });
        break;
      case "log":
        setData((prev) => {
          prev[id - 1].log = payload.log;
          return [...prev];
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="door">
      <div className="overview">
        <h3 className="title">Tổng quan</h3>
        <div className="table">
          <DataGrid
            autoHeight
            rows={data}
            columns={columns}
            checkboxSelection
          />
        </div>
      </div>
      <div className="logs">
        <h3 className="title">Nhật ký</h3>
        <div className="table">
          <div className="select">
            <FormControl variant="standard" fullWidth>
              <InputLabel>Cửa</InputLabel>
              <Select
                label="Cửa"
                value={door}
                onChange={(e) => {
                  setDoor(e.target.value);
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Cửa 1</MenuItem>
                <MenuItem value={2}> Cửa 2</MenuItem>
                <MenuItem value={3}> Cửa 3</MenuItem>
                <MenuItem value={4}> Cửa 4</MenuItem>
                <MenuItem value={5}> Cửa 5</MenuItem>
              </Select>
            </FormControl>
          </div>
          {door && (
            <DataGrid
              autoHeight
              rows={data[door - 1].listLog}
              columns={logsCol}
              checkboxSelection
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Door;

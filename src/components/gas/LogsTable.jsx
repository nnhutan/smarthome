import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TimePicker from "@mui/lab/TimePicker";
import DatePicker from "@mui/lab/DatePicker";
const LogsTable = ({ data }) => {
  const [room, setRoom] = useState("");

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 120,
    },
    {
      field: "date",
      headerName: "Tháng / Ngày / Năm",
      width: 200,
      renderCell: (params) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              views={['day', 'month', 'year']}
              label="Date"
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
      field: "time",
      headerName: "Thời gian",
      width: 150,
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

  return (
    <>
      <div className="select">
        <FormControl variant="standard" fullWidth>
          <InputLabel>Phòng</InputLabel>
          <Select
            label="Phòng"
            value={room}
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Phòng 1</MenuItem>
          </Select>
        </FormControl>
      </div>
      {room && (
        <DataGrid
          pageSize={5}
          autoHeight
          rows={data[room - 1].listLog}
          columns={columns}
          checkboxSelection
        />
      )}
    </>
  );
};

export default LogsTable;

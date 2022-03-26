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
const LogsTable = ({ data }) => {
  const [door, setDoor] = useState("");

  const columns = [
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

  return (
    <>
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
          columns={columns}
          checkboxSelection
        />
      )}
    </>
  );
};

export default LogsTable;

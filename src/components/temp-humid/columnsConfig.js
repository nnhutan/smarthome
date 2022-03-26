import { Button, FormControl, NativeSelect, Switch } from "@mui/material";

const columnsConfig = (handleChange) => {
  return [
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "name",
      headerName: "Tên phòng",
      width: 120,
    },

    {
      field: "auto",
      headerName: "Tự động",
      renderCell: (params) => {
        return (
          <Switch
            checked={params.row.auto}
            onChange={(e) =>
              handleChange(params.row.id, { auto: e.target.checked }, "auto")
            }
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        );
      },
    },
    {
      field: "temp",
      headerName: "Nhiệt độ",
    },
    {
      field: "humid",
      headerName: "Độ ẩm",
    },
    {
      field: "duration",
      headerName: "Cập nhật sau",
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
            <Button variant="contained" size="small" color="success">
              Detail
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

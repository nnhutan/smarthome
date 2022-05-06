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
    }
  ];
};

export default columnsConfig;

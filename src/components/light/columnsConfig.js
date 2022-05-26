import { Button, FormControl, NativeSelect, Switch } from "@mui/material";

const columnsConfig = (handleChange) => {
  return [
    {
      field: "id",
      headerName: "ID",
      width: 280,
    },
    {
      field: "name",
      headerName: "Tên đèn",
      width: 300,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 160,
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
  ];
};

export default columnsConfig;

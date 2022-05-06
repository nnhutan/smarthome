import { Button, FormControl, NativeSelect, Switch } from "@mui/material";

const columnsConfig = (handleChange) => {
  return [
    {
      field: "id",
      headerName: "ID",
      width: 150,
    },
    {
      field: "name",
      headerName: "Tên đèn",
      width: 200,
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
    // {
    //   field: "room",
    //   headerName: "Phòng",
    // },
    // {
    //   field: "auto",
    //   headerName: "Tự động",
    //   renderCell: (params) => {
    //     return (
    //       <Switch
    //         checked={params.row.auto}
    //         onChange={(e) =>
    //           handleChange(params.row.id, { auto: e.target.checked }, "auto")
    //         }
    //         onClick={(e) => {
    //           e.stopPropagation();
    //         }}
    //       />
    //     );
    //   },
    // },
    {
      field: "duration",
      headerName: "Hẹn giờ tắt/ bật",
      width: 200,
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
  ];
};

export default columnsConfig;

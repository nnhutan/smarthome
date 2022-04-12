export function changeHandler(setData) {
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
  return handleChange;
}

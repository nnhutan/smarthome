import axios from 'axios';

const origin = 'http://localhost:3001/api/v1'

const lightOn = async (id) => {
  axios.post(origin + '/lights/' + id).then().catch(err => console.log(err))
}

export function changeHandler(setData) {
  const handleChange = (id, payload, type) => {
    switch (type) {
      case "status":
        setData((prev) => {
          if (id == '1828841') {
            prev[0].status = payload.status;
          }
          else {
            prev[1].status = payload.status;
          }
          return [...prev];
        });
        lightOn(id);
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

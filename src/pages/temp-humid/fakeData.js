const data = [
  {
    id: 1,
    name: "Phòng 1",
    auto: true,
    temp: 26,
    humid: 61,
    duration: 2,
    log: true,
    listLog: [
      {
        id: 1,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 2,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 3,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 4,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 5,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
    ],
  },
  {
    id: 2,
    name: "Phòng 2",
    auto: true,
    temp: 30,
    humid: 61,
    duration: 15,
    log: false,
    listLog: [
      {
        id: 1,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 2,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 3,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 4,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 5,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
    ],
  },
  {
    id: 3,
    name: "Phòng 3",
    auto: false,
    temp: 26,
    humid: 62,
    duration: 10,
    log: true,
    listLog: [
      {
        id: 1,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 2,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 3,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 4,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 5,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
    ],
  },
  {
    id: 4,
    name: "Phòng 4",
    auto: true,
    temp: 30,
    humid: 62,
    duration: 2,
    log: false,
    listLog: [
      {
        id: 1,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 2,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 3,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 4,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 5,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
    ],
  },
  {
    id: 5,
    name: "Phòng 5",
    auto: false,
    temp: 26,
    humid: 63,
    duration: 5,
    log: true,
    listLog: [
      {
        id: 1,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 2,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 3,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 4,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
      {
        id: 5,
        time: new Date("2018-01-01T00:00:00.000Z"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt quo id ratione aliquid nesciunt iure reiciendis eius omnis!",
      },
    ],
  },
];
export default data;

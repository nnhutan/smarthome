const data = [
  {
    id: 1,
    name: "Phòng 1",
    status: true,
    start: new Date("2018-01-01T00:00:00.000Z"),
    end: new Date("2018-01-01T00:00:00.000Z"),
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
    status: true,
    start: new Date("2018-01-01T00:00:00.000Z"),
    end: new Date("2018-01-01T00:00:00.000Z"),
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
    status: false,
    start: new Date("2018-01-01T00:00:00.000Z"),
    end: new Date("2018-01-01T00:00:00.000Z"),
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
    status: true,
    start: new Date("2018-01-01T00:00:00.000Z"),
    end: new Date("2018-01-01T00:00:00.000Z"),
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
    status: false,
    start: new Date("2018-01-01T00:00:00.000Z"),
    end: new Date("2018-01-01T00:00:00.000Z"),
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

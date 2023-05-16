import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId({ length: 10 });

export const arr = [
  {
    id: uid(),
    name: "soccer", 
    teams: [
      {
        id: uid(),
        name: "Real madrid"
      },
      {
        id: uid(),
        name: "Manchester City"
      }
    ]
  },
  {
    id: uid(),
    name: "hockey",
    teams: [
      {
        id: uid(),
        name: "Penguins"
      },
      {
        id: uid(),
        name: "Toronto Maple Leafs"
      }
    ]
  },
  {
    id: uid(),
    name: "formula 1",
    teams: [
      {
        id: uid(),
        name: "Red bull"
      },
      {
        id: uid(),
        name: "Ferrari"
      }
    ]
  }
];
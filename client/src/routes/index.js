import Home from "./Home";

const basicRoutes = [
  {
    name: "home",
    niceName: "Home",
    path: "/",
    type: "active",
    component: Home,
  }
];

const cardRoutes = [
  {
    name: "data_card",
    niceName: "Data Visualization & Analysis",
    path: "/data_viz",
    type: "inactive"
  },
  {
    name: "dev_card",
    niceName: "Full Stack Web Development",
    path: "/dev_stack",
    type: "inactive"
  },
  {
    name: "ux_card",
    niceName: "UI/UX & Design",
    path: "/design",
    type: "inactive"
  }
]

export const mainRoutes = {
  basic: basicRoutes,
  card: cardRoutes
}
import Home from "./Home";
import phImage from "../assets/images/binary-code-image.png"

const basicRoutes = [
  {
    name: "home",
    niceName: "Home",
    path: "/",
    type: "active",
    component: Home
  }
];

const cardRoutes = [
  {
    name: "data_card",
    title: "Data Visualization & Analysis",
    description: 'Interactive visualizations are invaluable to for facilitating effective data exploration, and therefore to an organization’s ability to maintain a situational awareness of trends.',
    image: {
      src: phImage,
      alt: 'Placeholder'
    },
    path: "/data_viz",
    type: "active",
    level: 1,
    childNodes: [
      {
        name: "chart_card",
        title: "D3.js Chart Library",
        description: 'Interactive visualizations are invaluable to for facilitating effective data exploration, and therefore to an organization’s ability to maintain a situational awareness of trends.',
        path: "/data_viz",
        type: "inactive",
        level: 2,        
      }
    ]
  },
  {
    name: "dev_card",
    title: "Full Stack Web Development",
    description: 'End-to-end solutions spanning the entire lifecycle of your application: API design, database administration, and front-end development.',
    image: {
      src: phImage,
      alt: 'Placeholder'
    },
    path: "/dev_stack",
    type: "active",
    level: 1,
    childNodes: [
      {
        name: "chart_card",
        title: "D3.js Chart Library",
        description: 'Interactive visualizations are invaluable to for facilitating effective data exploration, and therefore to an organization’s ability to maintain a situational awareness of trends.',
        path: "/data_viz",
        type: "inactive",
        level: 2,        
      }
    ]
  },
  {
    name: "ux_card",
    title: "UI/UX & Design",
    description: 'High definition mockups, along with wireframing, information architecture, and basic design services to ensure a seamless experience your site users will love.',
    image: {
      src: phImage,
      alt: 'Placeholder'
    },
    path: "/design",
    type: "active",
    level: 1,
    childNodes: [
      {
        name: "chart_card",
        title: "D3.js Chart Library",
        description: 'Interactive visualizations are invaluable to for facilitating effective data exploration, and therefore to an organization’s ability to maintain a situational awareness of trends.',
        path: "/data_viz",
        type: "inactive",
        level: 2,        
      }
    ]
  }
]

export const mainRoutes = {
  basic: basicRoutes,
  cards: cardRoutes
}
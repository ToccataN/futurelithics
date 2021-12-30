import Home from "./Home";
import ServicePage from './ServicePage';
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
    name: "data",
    title: "Data Visualization & Analysis",
    description: 'Interactive visualizations are invaluable to for facilitating effective data exploration, and therefore to an organization’s ability to maintain a situational awareness of trends.',
    component: ServicePage,
    image: {
      src: phImage,
      alt: 'Placeholder'
    },
    path: "/data-viz",
    type: "active",
    level: 1,
    routes: [
      {
        name: "chart_card",
        title: "D3.js Chart Library",
        image: {
          src: phImage,
          alt: 'Placeholder'
        },
        description: 'Interactive visualizations are invaluable to for facilitating effective data exploration, and therefore to an organization’s ability to maintain a situational awareness of trends.',
        path: "/data-viz/chart-card",
        type: "inactive",
        level: 2,        
      }
    ]
  },
  {
    name: "dev",
    title: "Full Stack Web Development",
    description: 'End-to-end solutions spanning the entire lifecycle of your application: API design, database administration, and front-end development.',
    component: ServicePage,
    image: {
      src: phImage,
      alt: 'Placeholder'
    },
    path: "/dev-stack",
    type: "active",
    level: 1,
    routes: [
      {
        name: "chart_card",
        title: "D3.js Chart Library",
        image: {
          src: phImage,
          alt: 'Placeholder'
        },
        description: 'Interactive visualizations are invaluable to for facilitating effective data exploration, and therefore to an organization’s ability to maintain a situational awareness of trends.',
        path: "/dev-stack/chart-card",
        type: "inactive",
        level: 2,        
      }
    ]
  },
  {
    name: "ux",
    title: "UI/UX & Design",
    description: 'High definition mockups, along with wireframing, information architecture, and basic design services to ensure a seamless experience your site users will love.',
    component: ServicePage,
    image: {
      src: phImage,
      alt: 'Placeholder'
    },
    path: "/design",
    type: "active",
    level: 1,
    routes: [
      {
        name: "chart_card",
        title: "D3.js Chart Library",
        image: {
          src: phImage,
          alt: 'Placeholder'
        },
        description: 'Interactive visualizations are invaluable to for facilitating effective data exploration, and therefore to an organization’s ability to maintain a situational awareness of trends.',
        path: "/design/chart-card",
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
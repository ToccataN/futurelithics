import Home from "./Home";
import ServiceDirectory from './ServiceDirectory';

import phImage from "../assets/images/binary-code-image.png"
import uiUxStock from "../assets/images/stock-ui-ux.png"
import railsLogo from "../assets/images/RailsLogo.jpg"
import analyticStock from "../assets/images/analytics-stock.jpg"
import wordpressStock from "../assets/images/wordpress-stock.jpg"
import futureLithicImage from "../assets/images/FutureLithic-Node.jpg"


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
    component: ServiceDirectory,
    image: {
      src: analyticStock,
      alt: 'Analytics & Insights',
      preprocess: true
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
    component: ServiceDirectory,
    image: {
      src: phImage,
      alt: 'Placeholder'
    },
    path: "/dev-stack",
    type: "active",
    level: 1,
    routes: [
      {
        name: "node_react",
        title: "Node-Express w/ React",
        image: {
          src: futureLithicImage,
          alt: 'Future Lithics',
          preprocess: true
        },
        description: 'This site is built using a Node/Express server with a React.js front end, and a Postgres DB using the Sequelize ORM.',
        path: "/",
        type: "inactive",
        level: 2,        
      },
      {
        name: "ruby_rails",
        title: "Ruby on Rails",
        image: {
          src: railsLogo ,
          alt: 'Ruby Rails',
          preprocess: true
        },
        description: 'I have built and worked on multiple Ruby on Rails applications, leveraging Postgres with ActiveRecord, webpacker for integrating Vue and React, and more...',
        path: "/",
        type: "inactive",
        level: 2,        
      },
      {
        name: "wordpress",
        title: "Wordpress CMS",
        image: {
          src: wordpressStock,
          alt: 'https://pixabay.com/images/id-581849/',
          preprocess: true
        },
        description: 'Modern Wordpress theme and plugin development. I have built new themes and plugins, and help refactor older ones.',
        path: "/",
        type: "inactive",
        level: 2,        
      }

    ]
  },
  {
    name: "ux",
    title: "UI/UX & Design",
    description: 'High definition mockups, along with wireframing, information architecture, and basic design services to ensure a seamless experience your site users will love.',
    component: ServiceDirectory,
    image: {
      src: uiUxStock,
      alt: 'UI/UX & Design',
      preprocess: true
    },
    path: "/design",
    type: "active",
    level: 1,
    routes: [
      {
        name: "content_mapping",
        title: "Content Mapping",
        image: {
          src: 'https://lyricitriade.com/wp-content/uploads/Spectrifact-Cmap.jpg',
          alt: 'Content Mapping | LyriciTriade',
          preprocess: true
        },
        description: 'Content mapping is an important first step when deciding the proper flow of a user\'s experience.',
        path: "https://lyricitriade.com/a-journey-in-product-development-part-1-ideation-and-content-mapping/",
        type: "external",
        level: 2,        
      },
      {
        name: "wireframing",
        title: "Wireframing",
        image: {
          src: 'https://lyricitriade.com/wp-content/uploads/Wireframe1-4-01-2048x1525.png',
          alt: 'Wireframing | LyriciTriade',
          preprocess: true
        },
        description: 'High quality wireframes can aid visualizing the elements of an application UI before worrying about styling elements such as color.',
        path: "https://lyricitriade.com/a-journey-in-product-development-part-2-decisions-and-wireframes/",
        type: "external",
        level: 2,        
      },
      {
        name: "prototyping",
        title: "Clickable Prototype (Adobe XD)",
        image: {
          src: 'https://lyricitriade.com/wp-content/uploads/Screen-Shot-2021-01-11-at-6.00.25-PM.jpg',
          alt: 'Clickable Prototype | LyriciTriade',
          preprocess: true
        },
        description: 'Having a clickable prototype can give clients a feel for how the application will work before the coding begins.',
        path: "https://xd.adobe.com/view/0dec45e4-7c0d-492c-8704-30b6949345f9-58bf/",
        type: "external",
        level: 2,        
      }
    ]
  }
]

export const mainRoutes = {
  basic: basicRoutes,
  cards: cardRoutes
}
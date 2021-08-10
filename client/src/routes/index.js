import Home from './Home';
import About from './About';

export const basicRoutes = [
	{
		name: "home",
		niceName: "Home",
		path: "/",
		component: Home
	},
	{
		name: "about",
		niceName: "About",
		path: "/about",
		component: About
	},
];
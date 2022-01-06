import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { mainRoutes } from '../../routes';

import Header from './Header'
import Footer from './Footer'

import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const routeParser = (routes) => {
	return routes.map((route) =>{
		return <Route exact key={route.name} {...route} />
	})
}

const flattenRoutes = (routes) => {
	let acc = [];
	for(let r = 0; r < routes.length; r++) {
		const route = routes[r];
		if (route.type == 'active') {
			acc.push(route);
		}
		if(route.routes && route.routes.length > 0){
			acc = acc.concat(flattenRoutes(route.routes));
		}
	}
	return acc;
}

const MainLayout = () => {
	const cards = flattenRoutes(mainRoutes.cards);

	return (
	  <React.Fragment>
	    <Router>
	      <Header />
	      <ScrollToTop />
	      <Switch>
			  	{routeParser(mainRoutes.basic)}
			  	{
			  		cards.map((route) => {  			
			  			return 	(
			  				<Route
			  				  exact
							      path={route.path}
							      key={route.name}
							      render={(props) => (
							        <route.component {...props} routes={route.routes} info={route} />
							      )}
							  />
							)
			  		})
			  	}
	  	  </Switch>
	  	</Router>
	  	<Footer />
	  </React.Fragment>
	);
}

export default MainLayout;
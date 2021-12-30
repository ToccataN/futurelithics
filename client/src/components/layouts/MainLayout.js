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

const MainLayout = () => {

	return (
	  <React.Fragment>
	    <Router>
	      <Header />
	      <ScrollToTop />
	      <Switch>
			  	{routeParser(mainRoutes.basic)}
			  	{
			  		mainRoutes.cards.map((route) => {  			
			  			return 	(
			  				<Route
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
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { mainRoutes } from '../../routes';

import Header from './Header'

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
	      <Switch>
			  	{routeParser(mainRoutes.basic)}
	  	  </Switch>
	  	</Router>
	  </React.Fragment>
	);
}

export default MainLayout;
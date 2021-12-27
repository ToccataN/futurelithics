import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { basicRoutes } from '../../routes';

import Header from './Header'


const MainLayout = () => {
	return (
	  <React.Fragment>
	    <Router>
	      <Header />
	      <Switch>
			  	{basicRoutes.map((route) => {
			  		return <Route exact key={route.name} {...route} />
			  	})}
	  	  </Switch>
	  	</Router>
	  </React.Fragment>
	);
}

export default MainLayout;
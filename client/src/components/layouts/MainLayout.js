import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { basicRoutes } from '../../routes';

import { Header } from './Header'


const MainLayout = () => {
	return (
	  <div className="main-layout container">
	    <Router>
	      <Header />
	      <Switch>
			  	{basicRoutes.map((route) => {
			  		return <Route exact key={route.name} {...route} />
			  	})}
	  	  </Switch>
	  	</Router>
	  </div>
	);
}

export default MainLayout;
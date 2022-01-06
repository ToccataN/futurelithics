import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons';

const iconClass = (card, routeName) => {
	if(card === null){
		return 'icon rotate-up';
	}

	if(card === routeName){
		return 'icon rotate-down';
	} else {
		return 'icon rotate-up';
	}
}

const routeFilter = (route) => {
	if(route.routes){
		const routes = route.routes;
		const filteredRoutes = routes.filter((r) => {
			return r.type === 'active';
		});
		if(filteredRoutes.length > 0){
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

const RecursiveAccordion = (props) => {
	const { routes, parentToggle } = props;

	const [card, setCard] = useState(null);

	const toggle = (name) => {
		if(card === name) {
			setCard(null);
		} else {
			setCard(name)
		}
	}

	return (
	  <div className="mobile-nav-body-container">
		{ 
			routes.map((route, i) => {
				if(routeFilter(route)){
					return (
						<Card key={route.name}>
						  
							<CardHeader onClick={() => toggle(route.name)} className="d-flex justify-content-between align-items-center ps-4">
					       <FontAwesomeIcon icon={ faAngleDown } className={iconClass(card, route.name)}  />
					       <Link to={{pathname: route.path}} onClick={parentToggle}  target={route.type == 'external' ? "_balnk" : ""}  className="flex-grow text-start mw-100">
						       <h6 style={{paddingRight: `${10 * (route.level - 1)}px` }} className="text-end mb-0">
						         {route.title}
						       </h6> 
					       </Link>  
					    </CardHeader>
					    <Collapse isOpen={card === route.name ? true : false}>
					    	<RecursiveAccordion routes={route.routes} parentToggle={parentToggle} />
					    </Collapse>
						</Card>
					)		
				} else if (route.type == 'active') {
					return (
						<Card key={route.name}>
							<CardHeader>
							  <Link to={{pathname: route.path}} onClick={() => parentToggle()} target={route.type == 'external' ? "_balnk" : ""}  className="flex-grow text-start mw-100">
					        <h6 style={{paddingRight: `${10 * (route.level - 1)}px` }} className="text-end mb-0 py-2">
					          {route.title}
					        </h6>
					      </Link>
					    </CardHeader>
						</Card>
					)					
				}
			})
		}
	  </div>
	)
}

RecursiveAccordion.propTypes = {
	routes: PropTypes.any,
	parentToggle: PropTypes.func
}

const MobileNav = (props) => {
  const { routes } = props;

  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

	return (
	 	<div className="d-block d-sm-none mobile-nav">
	 	  <button className={`mobile-toggle btn btn-secondary ${open ? "focused" : ""}`} onClick={toggle}>
	 	  	{!open ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} />}
	 	  </button>
	 	  { open && <div className="mobile-nav-body"><RecursiveAccordion routes={routes} parentToggle={toggle} /></div> }
	  </div>
	);
}

MobileNav.propTypes = {
	routes: PropTypes.any
}

export default MobileNav;
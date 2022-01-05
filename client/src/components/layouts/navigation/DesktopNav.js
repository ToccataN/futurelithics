import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const routeFilter = (route) => {
	if(route.routes){
		const routes = route.routes;
		const filteredRoutes = routes.filter((r) => {
			return r.type === 'active' || r.type === 'external';
		});

		if(filteredRoutes.length > 0){
			return filteredRoutes;
		} else {
			return [];
		}
	} else {
		return [];
	}
}

const RecursiveDropdown = (props) => {
	const { route } = props;

	const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <ButtonDropdown  direction="left" className="desktop-sub-nav" isOpen={open} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} nav={true}>   
      <DropdownToggle caret={false} className="desktop-toggle-sub" >
      	<div className="d-flex justify-content-between align-items-center">
      	  <FontAwesomeIcon icon={ faArrowLeft } className=" align-middle icon"  />
      	  <Link to={route.path} className="flex-grow text-end w-100">{route.title}</Link>
	      </div>
      </DropdownToggle>
      <DropdownMenu className="py-2 desktop-sub-nav-menu" left="true">
        <div className="menu-inner">
      	{
      		routeFilter(route).map((route, i) => {
      			if(route.routes){
      				return <RecursiveDropdown route={route} key={route.name} />
      			} else {
      				return (
      					<DropdownItem key={route.name}>
      					  <Link to={{pathname: route.path}} target={route.type == 'external' ? "_balnk" : ""} className="flex-grow text-end w-100 sub-item-link">{route.title}</Link>
      				  </DropdownItem>
      				)
      			}
      		})
      	}
      	</div>    	
		  </DropdownMenu> 
    </ButtonDropdown>
  )
}

RecursiveDropdown.propTypes = {
	route: PropTypes.object
}

const DesktopNav = (props) => {
  const { routes } = props;

  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

 return (
 	<div className="d-none d-md-block">
    <ButtonDropdown className="desktop-nav" isOpen={open} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} nav={true}>
      <DropdownToggle caret={false} className="desktop-toggle" >
      	<FontAwesomeIcon icon={faBars}  />
      </DropdownToggle>
      <DropdownMenu className="py-4" right>
        <div className="menu-inner">
      	{
      		routes.map((route) => {
      			if(routeFilter(route).length > 0){
      				return <RecursiveDropdown route={route} key={route.name} />
      			} else {
      				return (
      				  <DropdownItem key={route.name} className='item-link p-2'>
      					  <Link to={{pathname: route.path}} className="flex-grow text-end w-100">{route.title}</Link>
      				  </DropdownItem>
      				)
      			}
      		})
      	}
      	</div>
		  </DropdownMenu> 
    </ButtonDropdown>
  </div>
 );
}

DesktopNav.propTypes = {
	routes: PropTypes.any
}

export default DesktopNav;

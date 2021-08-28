import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'reactstrap'

const NonAuthHeader = (props) => {
  const { toggler } = props;

  return (
		<Nav className="flex-row ms-auto">
      <NavItem className="pl-2">
        <a
          onClick={ (e) =>{
          	e.preventDefault();
            toggler('login') 
          }}
          className="btn"
        >Login</a>
      </NavItem>
      <NavItem className="pl-2">
        <a
          onClick={ (e) => { 
          	e.preventDefault();
          	toggler('register') 
          }}
          className="btn"
        >Sign Up</a>
      </NavItem>
    </Nav>
  )
}

NonAuthHeader.propTypes = {
	toggler: PropTypes.func,
}

export default NonAuthHeader;


import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavbarBrand, Navbar, Nav, NavItem, Button } from 'reactstrap'
import { connect } from "react-redux";

import { loginUser, logoutUser } from "../../redux/auth/actions";

import { basicRoutes } from '../../routes';

import LoginModal from '../modals/LoginModal';

const Header = (props) => {

	const [ modalOpen, setModalOpen ] = useState(false);

	return (
		<React.Fragment>
		  <Navbar>
		  	<NavbarBrand href={'/'}>
		  		<h2>React-Express Scaffold</h2>
		  	</NavbarBrand>
		  	<Nav className="flex-row me-auto">
		  		{basicRoutes.map((route) => {
		  			return (
		  				<NavItem key={`nav-link-${route.name}`} className="mr-2 px-2">
		  					<NavLink exact to={route.path} className="nav-link">
		  						{route.niceName}
		  					</NavLink>
		  				</NavItem>
		  			);
		  		})}
        </Nav>
        <Nav className="flex-row ms-auto">
          <NavItem className="pl-4">
            <Button onClick={ () => setModalOpen(!modalOpen) }> Login</Button>
          </NavItem>
        </Nav>
		  </Navbar>
		  <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} loginUser={props.loginUser} />
		</React.Fragment>
	);
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser())
});

Header.propTypes = {
	loginUser: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

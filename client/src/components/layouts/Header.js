import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavbarBrand, Navbar, Nav, NavItem, Button } from 'reactstrap'
import { connect } from "react-redux";

import { loginUser, logoutUser, registerUser } from "../../redux/auth/actions";

import { basicRoutes } from '../../routes';

import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal';

const Header = (props) => {

	const [ modalOpen, setModalOpen ] = useState(false);
	const [ registerModalOpen, setRegisterModalOpen ] = useState(false);

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
          <NavItem className="pl-2">
            {
            	props.auth.isAuthenticated ? (
		            <Button
		              onClick={ () =>{
		              	props.logoutUser()
		              }}
		            >Logout</Button>
            	) : (
		            <Button
		              onClick={ () =>{
		                setModalOpen(!modalOpen)
		              }}
		            >Login</Button>
            	)
            }

          </NavItem>
          <NavItem className="pl-2">
            <Button 
	            onClick={ () =>{ 
	            	setRegisterModalOpen(!registerModalOpen) 
	            }}
            >Sign Up</Button>
          </NavItem>
        </Nav>
		  </Navbar>
		  <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} loginUser={props.loginUser} />
		  <RegisterModal modalOpen={registerModalOpen} setModalOpen={setRegisterModalOpen} registerUser={props.registerUser} />
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
  registerUser: (creds) => dispatch(registerUser(creds)),
  logoutUser: () => dispatch(logoutUser())
});

Header.propTypes = {
	loginUser: PropTypes.func,
	logoutUser: PropTypes.func,
	registerUser: PropTypes.func,
	auth: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

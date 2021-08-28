import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavbarBrand, Navbar, Nav, NavItem } from 'reactstrap'
import { connect } from "react-redux";

import { basicRoutes } from '../../routes';

import ModalContainer from '../modals/ModalContainer';
import NonAuthHeader from './navigation/NonAuthHeader';
import AuthHeader from './navigation/AuthHeader';

const Header = (props) => {

	const [ modalOpen, setModalOpen ] = useState(false);
	const [ modalType, setModalType ] = useState(null);

	const toggleModal = (type) => {
		setModalOpen(!modalOpen);
		setModalType(type);
	}

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
        { props.auth.isAuthenticated ? <AuthHeader /> : <NonAuthHeader toggler={toggleModal} /> }
		  </Navbar>
		  <ModalContainer modalOpen={modalOpen} setModalOpen={setModalOpen} type={modalType} />
		</React.Fragment>
	);
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

Header.propTypes = {
	logoutUser: PropTypes.func,
	auth: PropTypes.object
}

export default connect(mapStateToProps)(Header)

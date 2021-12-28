import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavbarBrand, Navbar, Nav, NavItem } from 'reactstrap'
import { connect } from "react-redux";

import { mainRoutes } from '../../routes';

import ModalContainer from '../modals/ModalContainer';
import NonAuthHeader from './navigation/NonAuthHeader';
import AuthHeader from './navigation/AuthHeader';

import Logo1 from '../../assets/images/Logo1.svg';

const Header = (props) => {

	const [ modalOpen, setModalOpen ] = useState(false);
	const [ modalType, setModalType ] = useState(null);

	const toggleModal = (type) => {
		setModalOpen(!modalOpen);
		setModalType(type);
	}

	return (
		<div className="header py-2">
		  <Navbar className="container">
		  	<NavbarBrand href={'/'}>
		  		<img src={Logo1} alt="Future Lithics" />
		  	</NavbarBrand>
		  	<Nav className="flex-row me-auto">
		  		{mainRoutes.card.map((route) => {
		  			return (
		  				<NavItem key={`nav-link-${route.name}`} className="mr-2 px-2">
		  					<NavLink exact to={route.path} className="nav-link link-primary">
		  						{route.niceName}
		  					</NavLink>
		  				</NavItem>
		  			);
		  		})}
        </Nav>
        { props.auth.isAuthenticated ? <AuthHeader /> : <NonAuthHeader toggler={toggleModal} /> }
		  </Navbar>
		  <ModalContainer modalOpen={modalOpen} setModalOpen={setModalOpen} type={modalType} />
		</div>
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

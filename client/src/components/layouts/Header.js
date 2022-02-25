import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { NavbarBrand, Navbar, Nav, NavItem } from "reactstrap";
import { connect } from "react-redux";
import DesktopNav from "./navigation/DesktopNav";
import MobileNav from "./navigation/MobileNav";

import { mainRoutes } from "../../routes";

import ModalContainer from "../modals/ModalContainer";

import Logo1 from "../../assets/images/Logo1.svg";

const Header = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const toggleModal = (type) => {
    setModalOpen(!modalOpen);
    setModalType(type);
  };

  return (
    <div className="header py-2">
      <Navbar className="container">
        <NavbarBrand href={"/"}>
          <img src={Logo1} alt="Future Lithics" />
        </NavbarBrand>
        {/* props.auth.isAuthenticated ? <AuthHeader /> : <NonAuthHeader toggler={toggleModal} /> */}
        <DesktopNav routes={mainRoutes.cards} />
        <MobileNav routes={mainRoutes.cards} />
      </Navbar>
      <ModalContainer
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        type={modalType}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

Header.propTypes = {
  logoutUser: PropTypes.func,
  auth: PropTypes.object,
};

export default connect(mapStateToProps)(Header);

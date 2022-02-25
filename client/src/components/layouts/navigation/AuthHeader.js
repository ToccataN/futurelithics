import React from "react";
import PropTypes from "prop-types";
import { Nav, NavItem } from "reactstrap";
import { connect } from "react-redux";

import { logoutUser } from "../../../redux/auth/actions";

const AuthHeader = (props) => {
  const { auth, logoutUser } = props;

  return (
    <Nav className="flex-row ms-auto">
      <NavItem className="pl-2 d-flex align-items-center">
        <p className="mb-0 align-middle">
          Welcome, <strong>{auth.user.username}</strong>!
        </p>
      </NavItem>
      <NavItem className="pl-2">
        <a
          onClick={(e) => {
            e.preventDefault();
            logoutUser();
          }}
          className="btn"
        >
          Logout
        </a>
      </NavItem>
    </Nav>
  );
};

AuthHeader.propTypes = {
  logoutUser: PropTypes.func,
  auth: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthHeader);

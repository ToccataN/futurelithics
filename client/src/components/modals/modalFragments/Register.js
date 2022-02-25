import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import { registerUser } from "../../../redux/auth/actions";

const Register = (props) => {
  const { toggle, registerUser } = props;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const submissionHandler = async () => {
    const creds = { username, password, passwordConfirm, email };
    registerUser(creds);
    toggle();
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submissionHandler();
      }}
    >
      <FormGroup>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="passwordConfirm">Confirm Password</Label>
        <Input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" value="submit" color="primary">
        Register
      </Button>
    </Form>
  );
};

Register.propTypes = {
  toggle: PropTypes.func,
  registerUser: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  registerUser: (creds) => dispatch(registerUser(creds)),
});

export default connect(null, mapDispatchToProps)(Register);

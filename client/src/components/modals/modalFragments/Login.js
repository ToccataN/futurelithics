import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

import { loginUser } from "../../../redux/auth/actions";

const Login = (props) => {
  
  const { toggle, loginUser } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submissionHandler = async () => {
    const creds = { username: username, password: password };
    loginUser(creds);
    console.log(toggle)
    toggle(); 
  };

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      submissionHandler();
    }} >
      <FormGroup>
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="remember" />
          Remember me
        </Label>
      </FormGroup>
      <Button type="submit" value="submit" color="primary">Login</Button>
    </Form>  
  )

}

Login.propTypes = {
  toggle: PropTypes.func,
  loginUser: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (creds) => dispatch(loginUser(creds)),
});


export default connect(null, mapDispatchToProps)(Login); 


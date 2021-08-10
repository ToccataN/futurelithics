import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';

const LoginModal = (props) => {
  
  const { modalOpen, setModalOpen, loginUser } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submissionHandler = async () => {
    const creds = { username: username, password: password };
    loginUser(creds);
    toggle(); 
  };

  const toggle = (bool) => {
  	setModalOpen(!bool);
  }

	return (
    <Modal isOpen={modalOpen} toggle={() => toggle(modalOpen)}>
      <ModalHeader toggle={() => toggle(modalOpen)}>Login</ModalHeader>
      <ModalBody>
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
      </ModalBody>
    </Modal>
	);
}

LoginModal.propTypes = {
	modalOpen: PropTypes.bool,
	setModalOpen: PropTypes.func,
	loginUser: PropTypes.func
}

export default LoginModal;
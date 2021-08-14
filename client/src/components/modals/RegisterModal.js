import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';

const RegisterModal = (props) => {
  
  const { modalOpen, setModalOpen, registerUser } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const submissionHandler = async () => {
    const creds = { username: username, password: password, passwordConfirm: passwordConfirm };
    const res = await registerUser(creds);
    console.log(res, 'res')
    if (res.success){
      toggle(); 
    }   
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
          <FormGroup>
            <Label htmlFor="passwordConfirm">Confirm Password</Label>
            <Input type="passwordConfirm" id="passwordConfirm" name="passwordConfirm" onChange={(e) => setPasswordConfirm(e.target.value)} />
          </FormGroup>          
          <Button type="submit" value="submit" color="primary">Register</Button>
        </Form>            
      </ModalBody>
    </Modal>
	);
}

RegisterModal.propTypes = {
	modalOpen: PropTypes.bool,
	setModalOpen: PropTypes.func,
	registerUser: PropTypes.func
}

export default RegisterModal;

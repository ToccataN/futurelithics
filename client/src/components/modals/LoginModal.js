import React from 'react';
import PropTypes from 'prop-types';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';

const LoginModal = (props) => {
  
  const { modalOpen, setModalOpen } = props;

  const toggle = (bool) => {
  	setModalOpen(!bool);
  }

	return (
    <Modal isOpen={modalOpen} toggle={() => toggle(modalOpen)}>
      <ModalHeader toggle={() => toggle(modalOpen)}>Login</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" name="username" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" />
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
	setModalOpen: PropTypes.func
}

export default LoginModal;
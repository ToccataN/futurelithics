import React from 'react';
import PropTypes from 'prop-types';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

import Login from './modalFragments/Login';
import Register from './modalFragments/Register';

const ModalContainer = (props) => {
  
  const { modalOpen, setModalOpen, type } = props;

  const toggle = () => {
  	setModalOpen(!modalOpen);
  }

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const modalSwitch = (type) => {
    switch(type){
      case 'login':
        return (<Login toggle={toggle} />);
      case 'register':
        return (<Register toggle={toggle} />);
      default:
        return (<p>Not a Valid Modal Type</p>);
    }
  }

	return (
    <Modal isOpen={modalOpen} toggle={() => toggle()}>
      <ModalHeader toggle={() => toggle()}>{ capitalize(type) }</ModalHeader>
      <ModalBody>
        {modalSwitch(type)}           
      </ModalBody>
    </Modal>
	);
}

ModalContainer.propTypes = {
	modalOpen: PropTypes.bool,
	setModalOpen: PropTypes.func,
  type: PropTypes.string
}

export default ModalContainer;
import React from 'react';
import PropTypes from 'prop-types';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

import Login from './modalFragments/Login';
import Register from './modalFragments/Register';
import Alert from './modalFragments/Alert';

const ModalContainer = (props) => {
  
  const { modalOpen, setModalOpen, type, response } = props;

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
      case 'alert':
        return (<Alert toggle={toggle} response={response}/>);
      default:
        return (<p>Not a Valid Modal Type</p>);
    }
  }

  const headerText = () => {
    if(type == 'alert' && response.title != undefined) {
      return response.title;
    } else {
      return type;
    }
  }

	return (
    <Modal isOpen={modalOpen} toggle={() => toggle()} style={{top: "20vh"}}>
      <ModalHeader toggle={() => toggle()}>{ capitalize(headerText()) }</ModalHeader>
      <ModalBody>
        {modalSwitch(type)}           
      </ModalBody>
    </Modal>
	);
}

ModalContainer.propTypes = {
	modalOpen: PropTypes.bool,
	setModalOpen: PropTypes.func,
  type: PropTypes.string,
  response: PropTypes.any
}

export default ModalContainer;
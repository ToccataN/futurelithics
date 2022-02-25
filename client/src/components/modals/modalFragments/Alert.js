import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Button } from "reactstrap";

import { loginUser } from "../../../redux/auth/actions";

const Alert = (props) => {
  const { toggle, response } = props;

  console.log(response, "resp!");

  return (
    <Container className="text-center">
      <Row>
        <Col md={12} className="p-1">
          <p>{response.message}</p>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="p-1">
          <Button onClick={() => toggle()} color="primary">
            Ok
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

Alert.propTypes = {
  toggle: PropTypes.func,
  response: PropTypes.any,
};

export default Alert;

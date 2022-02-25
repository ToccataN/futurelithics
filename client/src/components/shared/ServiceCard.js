import React from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardSwitch = (props) => {
  const { card, children, classes } = props;

  switch (card.type) {
    case "acitve":
      return (
        <Link to={card.path} className={classes}>
          {children}
        </Link>
      );
    case "inactive":
      return (
        <div to={card.path} className={classes}>
          {children}
        </div>
      );
    case "external":
      return (
        <Link to={{ pathname: card.path }} className={classes} target="_blank">
          {children}
        </Link>
      );
    default:
      return (
        <Link to={card.path} className={classes}>
          {children}
        </Link>
      );
  }
};

CardSwitch.propTypes = {
  card: PropTypes.object,
  children: PropTypes.any,
  classes: PropTypes.string,
};

const ServiceCard = (props) => {
  const { card } = props;

  return (
    <CardSwitch
      card={card}
      classes="col-lg-4 col-md-12 px-4 my-2 d-flex justify-content-center"
    >
      <div className="p-2 service-card">
        <div className="m-1 pb-2 service-card-inner">
          <div className="image-container">
            <img
              src={card.image.src}
              alt={card.image.alt}
              className={card.image.preprocess ? "preprocess-image" : ""}
            />
          </div>
          <h5 className="text-primary text-center py-3 mb-0">{card.title}</h5>
          <div className="mx-2 p-4 text-center description">
            <p>{card.description}</p>
          </div>
        </div>
      </div>
    </CardSwitch>
  );
};

ServiceCard.propTypes = {
  card: PropTypes.object,
};

export default withRouter(ServiceCard);

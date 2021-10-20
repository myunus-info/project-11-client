import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ServicesCard.css';

const ServicesCard = ({ service }) => {
  const [shadow, setShadow] = useState();
  const [showButton, setShowButton] = useState('invisible');
  const { image, description, title, price, _id } = service;

  const cardShadow = () => {
    setShadow('services-card');
    setShowButton('visible');
  };
  const removeShadow = () => {
    setShadow();
    setShowButton('invisible');
  };

  const history = useHistory();
  const handleClick = () => {
    history.push(`/book/${_id}`);
  };

  return (
    <div className="col-lg-4 text-center">
      <div
        className="service-wrapper"
        onMouseOver={cardShadow}
        onMouseOut={removeShadow}
      >
        <div className={`service-dets ${shadow}`}>
          <div className="service-img">
            <img className="img-fluid" src={image} alt="" />
          </div>
          <div className="service-text">
            <h3>{title}</h3>
            <h3>{price}</h3>
            <p>{description}</p>
          </div>
        </div>
        <button
          onClick={handleClick}
          className={showButton}
          id="service-button"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;

import React from 'react';
import './TestimonialCard.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TestimonialCard = ({ test }) => {
  const { name, company, image, review } = test;
  return (
    <div className="col-lg-4">
      <div className="testimonial-card">
        <div className="testi-header d-flex">
          <div className="testi-img me-2">
            <img src={image} alt="" />
          </div>
          <div className="testi-text">
            <h5>{name}</h5>
            <p>{company}</p>
          </div>
        </div>
        <div className="testi-body">
          <p>
            {review}
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat{' '} */}
          </p>
        </div>
        <div className="testi-footer">
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

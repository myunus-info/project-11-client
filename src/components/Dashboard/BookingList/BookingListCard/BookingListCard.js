import React from 'react';
import './BookingListCard.css';

const BookingListCard = ({ service }) => {
  return (
    <div className="bookingCard me-5 mb-5">
      <div style={{ maxWidth: '500px' }} className="booking-card">
        <div className="d-flex justify-content-between mb-4">
          <img src={service.image} alt="" />
          <span
            id={`${
              service.status === 'Pending'
                ? 'pending'
                : service.status === 'Done'
                ? 'done'
                : 'onGoing'
            }`}
          >
            {service.status}
          </span>
        </div>
        <h3>{service.title}</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
    </div>
  );
};

export default BookingListCard;

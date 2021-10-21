import React, { useContext, useState } from 'react';
import './BookingList.css';
import BookingListCard from '../BookingListCard/BookingListCard';
import { UserContext } from '../../../../App';
import SideBarModified from '../../SideBarModified/SideBarModified';
import logo from '../../../../img/logo.png';

const BookingList = () => {
  const [loggedInUser] = useContext(UserContext);
  const [serviceDetails, setServiceDetails] = useState([]);

  useState(() => {
    fetch('http://localhost:5000/bookingsList')
      .then(res => res.json())
      .then(data => setServiceDetails(data));
  }, []);

  return (
    <div>
      <div className="container-fluid">
        {/* Top bar start */}
        <div className="row mb-4 mt-3">
          <div className="col-lg-2">
            <img
              style={{
                width: '120px',
                height: '51px',
                marginLeft: '30px',
              }}
              src={logo}
              alt=""
            />
          </div>
          <div className="col-lg-10 d-flex justify-content-between">
            <h3 className="ps-5 mt-2">Booking List</h3>
            <p className="pe-5 mt-2 fw-bold">{loggedInUser.name}</p>
          </div>
        </div>
        {/* Top bar ends */}

        <div className="row">
          <div className="col-lg-2">
            <SideBarModified />
          </div>

          <div className="col-lg-10 form-design" style={{ minHeight: '100%' }}>
            <div className="d-flex flex-wrap">
              {serviceDetails.map(service => (
                <BookingListCard service={service} key={service._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;

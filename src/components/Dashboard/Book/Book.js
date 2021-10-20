import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './Book.css';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import creditCard1 from '../../../img/credit-card1.png';
import creditCard2 from '../../../img/credit-card2.png';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import SideBarModified from '../SideBarModified/SideBarModified';
import logo from '../../../img/logo.png';
import { useParams } from 'react-router-dom';

const Book = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [toggleChecks, setToggleChecks] = useState(1);
  const [shippingData, setShippingData] = useState();
  const [booking, setBooking] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://luxuryliving.herokuapp.com/book/${id}`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, [id]);

  const handleToggleChecks = index => {
    setToggleChecks(index);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    setShippingData(data);
  };

  const handlePaymentSuccess = paymentId => {
    const orderDetails = {
      userInfo: { ...loggedInUser },
      ...shippingData,
      paymentId,
    };

    fetch('https://luxuryliving.herokuapp.com/addBooking', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(orderDetails),
    })
      .then(res => res.json())
      .then(success => {
        if (success) {
          alert('Order placed successfully!');
        }
      });
  };

  return (
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
          <h3 className="ps-5 mt-2">Book</h3>
          <p className="pe-5 mt-2 fw-bold">{loggedInUser.name}</p>
        </div>
      </div>
      {/* Top bar ends */}
      <div className="row">
        <div className="col-lg-2">
          <SideBarModified />
        </div>
        <div className="col-lg-10 form-design">
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ maxWidth: '570px' }}
            className={`${shippingData ? 'd-none' : 'd-block'}`}
          >
            <div className="form-group">
              <input
                defaultValue={loggedInUser.name}
                {...register('name', { required: true })}
                className="form-control"
              />
              {errors.name && (
                <span className="text-danger fw-bold">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                defaultValue={loggedInUser.email}
                {...register('email', { required: true })}
                className="form-control"
              />
              {errors.email && (
                <span className="text-danger fw-bold">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                defaultValue={booking.title}
                {...register('service', { required: true })}
                className="form-control"
              />
              {errors.service && (
                <span className="text-danger fw-bold">
                  This field is required
                </span>
              )}
            </div>

            <div className="d-flex">
              <span></span>
              <input
                className="Submit-button"
                type="submit"
                value="Proceed to Pay"
              />
            </div>
          </form>
          {/* form check for payment process */}
          <div
            style={{ maxWidth: '570px' }}
            className={`${shippingData ? 'd-block' : 'd-none'} form-design`}
          >
            <label className="mb-3">Pay with</label>
            <div className="payment-methods d-flex align-items-center">
              <div
                onClick={() => handleToggleChecks(1)}
                style={{ cursor: 'pointer' }}
                className="credit-card"
              >
                <p
                  className="circle"
                  id={toggleChecks === 1 && 'check-active'}
                  style={{ display: 'inline-block' }}
                >
                  <FontAwesomeIcon icon={faCircle} />{' '}
                </p>
                <span>
                  <img src={creditCard1} alt="" />
                  <span className="credit-text">Credit Card</span>{' '}
                </span>
              </div>

              <div
                onClick={() => handleToggleChecks(2)}
                style={{ cursor: 'pointer' }}
                className="paypal"
              >
                <p
                  className="circle"
                  id={toggleChecks === 2 && 'check-active'}
                  style={{ display: 'inline-block' }}
                >
                  <FontAwesomeIcon icon={faCircle} />{' '}
                </p>
                <span>
                  {' '}
                  <img src={creditCard2} alt="" />
                  <span className="credit-text">Paypal</span>{' '}
                </span>
              </div>
            </div>

            <ProcessPayment handlePayment={handlePaymentSuccess} />
          </div>
          {/* form check for payment process ends */}
        </div>
      </div>
    </div>
  );
};

export default Book;

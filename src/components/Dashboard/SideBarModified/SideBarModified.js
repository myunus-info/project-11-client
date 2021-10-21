import React, { useContext, useEffect, useState } from 'react';
import './SideBarModified.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faPlus,
  faShoppingBag,
  faShoppingCart,
  faTh,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SideBarModified = () => {
  const [loggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/isAdmin', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then(res => res.json())
      .then(data => setIsAdmin(data));
  }, [loggedInUser]);

  return (
    <div className="sidebar">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/book">
            <span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            Book
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bookingList">
            <span>
              <FontAwesomeIcon icon={faShoppingBag} />
            </span>
            Booking List
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/review">
            <span>
              <FontAwesomeIcon icon={faCommentDots} />
            </span>
            Review
          </Link>
        </li>
        {isAdmin && (
          <div>
            {' '}
            <li className="nav-item">
              <Link className="nav-link" to="/orderList">
                <span>
                  <FontAwesomeIcon icon={faShoppingBag} />
                </span>
                Order List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addService">
                <span>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                Add Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/makeAdmin">
                <span>
                  <FontAwesomeIcon icon={faUserPlus} />
                </span>
                Make Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manageServices">
                <span>
                  <FontAwesomeIcon icon={faTh} />
                </span>
                Manage Services
              </Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default SideBarModified;

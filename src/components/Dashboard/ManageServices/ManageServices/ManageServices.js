import React, { useContext, useEffect, useState } from 'react';
import './ManageServices.css';
import logo from '../../../../img/logo.png';
import { UserContext } from '../../../../App';
import SideBarModified from '../../SideBarModified/SideBarModified';
import ManageServiceTable from '../ManageServiceTable/ManageServiceTable';

const ManageServices = () => {
  const [loggedInUser] = useContext(UserContext);
  const [servicesTable, setServicesTable] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/bookings')
      .then(res => res.json())
      .then(data => setServicesTable(data));
  }, []);

  return (
    <div className="manage-service">
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
            <h3 className="ps-5 mt-2">Manage Services</h3>
            <p className="pe-5 mt-2 fw-bold">{loggedInUser.name}</p>
          </div>
        </div>
        {/* Top bar ends */}
        <div className="row">
          <div className="col-lg-2">
            <SideBarModified />
          </div>
          <div className="col-lg-10 table-design">
            <table style={{ maxWidth: '90%' }} className="table">
              <thead>
                <tr>
                  <th>Service Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {servicesTable.map(service => (
                  <ManageServiceTable service={service} key={service._id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;

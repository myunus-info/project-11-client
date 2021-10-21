import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import './OrderList.css';
import logo from '../../../../img/logo.png';
import SideBarModified from '../../SideBarModified/SideBarModified';
import OrderListDetails from '../OrderListDetails/OrderListDetails';

const OrderList = () => {
  const [loggedInUser] = useContext(UserContext);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then(res => res.json())
      .then(data => setTableData(data));
  }, []);

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
          <h3 className="ps-5 mt-2">Order List</h3>
          <p className="pe-5 mt-2 fw-bold">{loggedInUser.name}</p>
        </div>
      </div>
      {/* Top bar ends */}
      <div className="row">
        <div className="col-lg-2">
          <SideBarModified />
        </div>

        <div className="col-lg-10 table-design">
          <table className="table" style={{ maxWidth: '90%' }}>
            <thead id="thead">
              <tr>
                <th>Name</th>
                <th>Email ID</th>
                <th>Service</th>
                <th>Pay With</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map(table => (
                <OrderListDetails table={table} key={table._id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;

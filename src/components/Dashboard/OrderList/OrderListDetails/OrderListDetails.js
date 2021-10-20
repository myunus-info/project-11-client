import React, { useState } from 'react';
import './OrderListDetails.css';

const OrderListDetails = ({ table }) => {
  return (
    <tr>
      <td>{table.name}</td>
      <td>{table.email}</td>
      <td>{table.service}</td>
      <td>{table.payWith}</td>

      <select className="form-select">
        {table.status.map((status1, index) => (
          <option value={index}>{status1}</option>
        ))}
      </select>
    </tr>
  );
};

export default OrderListDetails;

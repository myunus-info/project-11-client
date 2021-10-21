import React from 'react';
import './ManageServiceTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageServiceTable = ({ service }) => {
  const handleDelete = e => {
    console.log(service._id);
    fetch(`http://localhost:5000/booking/${service._id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(success => {
        if (success) {
          e.target.closest('#deleteService').remove();
          alert('Service deleted successfully!');
        }
      });
  };
  return (
    <tr id="deleteService">
      <td>{service.service}</td>
      <td>
        {/* <button className="btn me-3 " id="edit-service">
          <FontAwesomeIcon icon={faEdit} />
        </button> */}
        <button onClick={handleDelete} className="btn" id="delete-service">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};

export default ManageServiceTable;

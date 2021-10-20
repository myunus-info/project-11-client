import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './MakeAdmin.css';
import logo from '../../../img/logo.png';
import SideBarModified from '../SideBarModified/SideBarModified';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    fetch('https://luxuryliving.herokuapp.com/makeAdmin', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(success => {
        if (success) {
          alert('Admin was added successfully!');
        }
      });
  };

  return (
    <div className="make-admin">
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
            <h3 className="ps-5 mt-2">Make Admin</h3>
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
              className="d-flex"
              style={{ maxWidth: '90%' }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-group me-3" style={{ width: '30%' }}>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  placeholder="john@gmail.com"
                  className="form-control"
                />
                {errors.email && (
                  <span className="text-danger fw-bold">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <input type="submit" value="Submit" className="Submit-button" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;

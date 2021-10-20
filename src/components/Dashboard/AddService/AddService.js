import React, { useContext, useState } from 'react';
import './AddService.css';
import { useForm } from 'react-hook-form';
import SideBarModified from '../SideBarModified/SideBarModified';
import { UserContext } from '../../../App';
import logo from '../../../img/logo.png';
import axios from 'axios';

const AddService = () => {
  const [loggedInUser] = useContext(UserContext);
  const [imageURL, setImageURL] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const formData = {
      title: data.title,
      description: data.description,
      image: imageURL,
    };
    fetch('https://luxuryliving.herokuapp.com/addService', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(success => {
        if (success) {
          alert('Booking created successfully!');
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const handleImageUpload = e => {
    const imageData = new FormData();
    imageData.set('key', '5883c45b690f65d7c89bc4f991cfaf50');
    imageData.append('image', e.target.files[0]);

    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(res => setImageURL(res.data.data.display_url))
      .catch(err => console.log(err));
  };

  return (
    <div className="add-service">
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
            <h3 className="ps-5 mt-2">Add Service</h3>
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
              className="service-form"
              style={{ maxWidth: '90%' }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="d-flex">
                <div className="form-group me-5" style={{ width: '50%' }}>
                  <label htmlFor="title">Service Title</label>
                  <input
                    type="text"
                    {...register('title', { required: true })}
                    id="title"
                    placeholder="Enter title"
                    className="form-control"
                  />
                  {errors.title && (
                    <span className="text-danger fw-bold">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-group me-5" style={{ width: '40%' }}>
                  <label htmlFor="image">Image</label>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    name="image"
                    // {...register('image', { required: true })}
                    id="image"
                    className="form-control"
                  />
                  {errors.image && (
                    <span className="text-danger fw-bold">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group" style={{ width: '50%' }}>
                <label htmlFor="description">Description</label>
                <textarea
                  {...register('description', { required: true })}
                  placeholder="Description"
                  className="form-control"
                  style={{ resize: 'none' }}
                  id="description"
                  cols="30"
                  rows="10"
                ></textarea>
                {errors.description && (
                  <span className="text-danger fw-bold">
                    This field is required
                  </span>
                )}
              </div>

              {/* <input defaultValue="test" {...register("example")} />

              <input {...register("exampleRequired", { required: true })} />
              {errors.exampleRequired && <span>This field is required</span>} */}

              <input className="Submit-button" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;

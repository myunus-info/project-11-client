import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import SideBarModified from '../SideBarModified/SideBarModified';
import './Review.css';
import logo from '../../../img/logo.png';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Review = () => {
  const [loggedInUser] = useContext(UserContext);
  const [imageURL, setImageURL] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    const reviewData = {
      name: data.name,
      company: data.company,
      review: data.review,
      image: imageURL,
    };

    fetch('http://localhost:5000/addReview', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(reviewData),
    })
      .then(res => res.json())
      .then(success => {
        if (success) alert('Review added successfully!');
      });
  };

  const handleImageUpload = e => {
    const imageData = new FormData();
    imageData.set('key', '93498d50731a6de49fcdd1638ad0ab52');
    imageData.append('image', e.target.files[0]);

    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(res => setImageURL(res.data.data.display_url))
      .catch(err => console.log(err));
  };

  return (
    <div className="review">
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
            <h3 className="ps-5 mt-2">Review</h3>
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
              style={{ maxWidth: '700px' }}
            >
              <div className="form-group">
                <input
                  type="text"
                  {...register('name', { required: true })}
                  placeholder="Your Name"
                  className="form-control"
                />
                {errors.name && (
                  <span className="text-danger fw-bold">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-group">
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
              <div className="form-group">
                <input
                  type="text"
                  {...register('company', { required: true })}
                  placeholder="Company's Name, Designation"
                  className="form-control"
                />
                {errors.company && (
                  <span className="text-danger fw-bold">
                    This field is required
                  </span>
                )}
              </div>

              <div className="form-group">
                <textarea
                  {...register('review', { required: true })}
                  placeholder="Description"
                  className="form-control"
                  style={{ resize: 'none' }}
                  cols="30"
                  rows="10"
                ></textarea>
                {errors.review && (
                  <span className="text-danger fw-bold">
                    This field is required
                  </span>
                )}
              </div>
              <input className="Submit-button" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

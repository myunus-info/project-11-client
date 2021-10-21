import React, { useState, useContext } from 'react';
import './Login.css';
import Navbar from '../../Homepage/Header/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import google from '../../../img/google.svg';
import facebook from '../../../img/facebook.svg';
import { UserContext } from '../../../App';
import {
  createUserWithCredentials,
  getUserToken,
  initializeLoginFramework,
  signInUserWithCredentials,
  signInWithFacebook,
  signInWithGoogle,
} from './loginManager';
import { useHistory, useLocation } from 'react-router-dom';
initializeLoginFramework();

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    success: false,
    error: '',
  });

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const handleResponse = res => {
    setUser(res);
    setLoggedInUser(res);
  };

  const storeIdToken = () => {
    getUserToken().then(idToken => {
      sessionStorage.setItem('token', idToken);
      history.replace(from);
    });
  };

  const googleSignIn = () => {
    signInWithGoogle()
      .then(res => {
        handleResponse(res);
        storeIdToken();
      })
      .catch(err => {
        console.log('No idToken received!');
      });
  };

  const fbSignIn = () => {
    signInWithFacebook()
      .then(res => {
        handleResponse(res);
        storeIdToken();
      })
      .catch(err => {
        console.log('No idToken received!');
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    let password;
    if (newUser && data.password === data.confirm_pass)
      password = data.password;
    if (!newUser) password = data.password;
    const userData = {
      name: `${data.First_Name} ${data.Last_Name}`,
      email: data.email,
      password,
      // password: data.password === data.confirm_pass ? data.password : "",
    };

    if (newUser && userData.email && userData.password) {
      createUserWithCredentials(userData.email, userData.password)
        .then(res => {
          handleResponse(res);
          storeIdToken();
        })
        .catch(err => {
          console.log('No idToken received!');
        });
    }

    if (!newUser && userData.email && userData.password) {
      signInUserWithCredentials(userData.email, userData.password)
        .then(res => {
          handleResponse(res);
          storeIdToken();
        })
        .catch(err => {
          console.log('No idToken received!');
        });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="login-form">
            <div className="col-lg-4 offset-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3>{newUser ? 'Create an account' : 'Login'}</h3>
                {newUser && (
                  <>
                    {' '}
                    <div className="form-group">
                      <input
                        type="text"
                        {...register('First_Name', { required: true })}
                        placeholder="First Name"
                        className="form-control input-field"
                      />
                      {errors.First_Name && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        {...register('Last_Name', { required: true })}
                        placeholder="Last Name"
                        className="form-control input-field"
                      />
                      {errors.Last_Name && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                  </>
                )}

                <div className="form-group">
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    placeholder="Email"
                    className="form-control input-field"
                  />
                  {errors.email && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    {...register('password', { required: true })}
                    placeholder="Password"
                    className="form-control input-field"
                  />
                  {errors.password && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                {newUser && (
                  <div className="form-group">
                    <input
                      type="password"
                      {...register('confirm_pass', { required: true })}
                      placeholder="Confirm Password"
                      className="form-control input-field"
                    />
                    {errors.confirm_pass && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                )}

                <input
                  type="submit"
                  value={newUser ? 'Create an account' : 'Login'}
                  className="form-control submit-button"
                  style={{ padding: '10px' }}
                />
                <div id="switch-account">
                  <p>
                    {newUser
                      ? 'Already have an account?'
                      : "Don't have an account?"}{' '}
                    <span onClick={() => setNewUser(!newUser)}>
                      {newUser ? 'Login' : 'Create an account'}
                    </span>
                  </p>
                </div>
              </form>

              {/* Handling success and error case */}
              {user.error && (
                <p
                  style={{ fontWeight: '600' }}
                  className="text-danger text-center mt-3"
                >
                  {user.error}
                </p>
              )}
              {user.success && (
                <p
                  style={{ fontWeight: '600' }}
                  className="text-success text-center mt-3"
                >
                  {`User ${newUser ? 'created' : 'logged in'} successfully!`}
                </p>
              )}
              {/* Handling success and error case Ends */}
            </div>
          </div>
        </div>
        {newUser && (
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <p id="parallel-line">Or</p>
              <div className="alternative-login">
                <button
                  onClick={fbSignIn}
                  className="form-control d-flex justify-content-around align-items-center"
                >
                  <div className="alt-img">
                    <img
                      style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '50%',
                        marginLeft: '-45px',
                      }}
                      src={facebook}
                      alt=""
                    />
                  </div>
                  <div className="alt-text">
                    <p style={{ marginBottom: '-2px' }}>
                      Continue with Facebook
                    </p>
                  </div>
                </button>
                <button
                  onClick={googleSignIn}
                  className="form-control d-flex justify-content-around align-items-center"
                >
                  <div className="alt-img">
                    <img
                      style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '50%',
                        marginLeft: '-45px',
                      }}
                      src={google}
                      alt=""
                    />
                  </div>
                  <div className="alt-text">
                    <p style={{ marginBottom: '-2px' }}>Continue with Google</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

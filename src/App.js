import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookingList from './components/Dashboard/BookingList/BookingList/BookingList';
import Home from './components/Homepage/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Review from './components/Dashboard/Review/Review';
import Book from './components/Dashboard/Book/Book';
import OrderList from './components/Dashboard/OrderList/OrderList/OrderList';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ManageServices from './components/Dashboard/ManageServices/ManageServices/ManageServices';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/book/:id">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/book">
            <Book />
          </PrivateRoute>
          <Route path="/bookingList">
            <BookingList />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/orderList">
            <OrderList />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route>
            <ManageServices />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

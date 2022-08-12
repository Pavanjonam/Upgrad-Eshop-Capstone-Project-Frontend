import "../App.css";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Home from "../components/home/Home";
import Login from "./login";
import SignUp from "./signUp";
import { Route, Redirect, Switch } from "react-router-dom";
//import AppBar from "./AppBar";
//import AddCourseForm from "./AddVehicleForm";
import "react-toastify/dist/ReactToastify.css";
//import MyCourses from "./MyCourses";
//import ProtectedRoute from "./common/ProtectedRoute";
//import AddBooking from "./AddBookings";


         
function App(props) {
  return (
    <>
      
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
}

export default App;
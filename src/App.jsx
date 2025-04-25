import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/LoginPage";
import Signin from "./Pages/SigninPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import UserDashboard from "./Pages/UserDashboard";

function App() {
  const [loggedIn, setIsloggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

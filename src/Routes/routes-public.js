import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Navigate } from "react-router-dom";
import About from "../Screens/about";
import Preview from "../Screens/preview";
import Donescreen from "../Screens/done/donescreen";
import Editscreen from "../Screens/editscreen";
import Profile from "../Screens/profile/profile";

const RoutesScreen = () => {
  const [newData, setNewData] = useState(null);

  const newDataHandler = (data) => {
    setNewData(data);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/about"
            element={<About newDataHandler={newDataHandler} />}
          />
          <Route path="/" element={<Navigate replace to="/about" />} />
          <Route
            exact
            path="/preview"
            element={<Preview newData={newData} />}
          />
          <Route exact path="/donescreen" element={<Donescreen />} />
          <Route
            exact
            path="/editScreen"
            element={<Editscreen newData={newData} />}
          />
          <Route exact path="/profileCard" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default RoutesScreen;

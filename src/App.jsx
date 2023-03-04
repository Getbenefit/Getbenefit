import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/Home/Home";
import ContactsPage from "./page/Contact/contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contact-us" element={<ContactsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

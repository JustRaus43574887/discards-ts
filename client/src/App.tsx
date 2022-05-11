import React from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

import { ToastContainer, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastSettings: ToastContainerProps = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: true,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
};

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <ToastContainer {...toastSettings} />
    </>
  );
};

export default App;

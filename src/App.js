// import logo from './logo.svg';
import React, { useEffect } from "react";
import './App.css';
import AOS from "aos";
import Routes from './router/Routes'
import { BrowserRouter as Router} from "react-router-dom";


const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

 
  return (
    <>
      {/* <ScrollToTop /> */}
      <Router >
      <Routes />
      </Router>
      {/* <>
      <ScrollToTop />
      <Routes />
    </> */}
    </>
  );
};

export default App;


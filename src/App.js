// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState()
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  let toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#3c3a3a'
      document.body.style.color = 'white'
      showalert("Dark mode has been Enabled", "success")

    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showalert("Light mode has been Enabled", "success")

    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutiles" about="AboutUs" home="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} />} /> */}
            <Textform heading="Enter the text to analyze below" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}


export default App;

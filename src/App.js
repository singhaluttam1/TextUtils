import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Success");
      document.title = 'Textutils - Dark-Mode';
      setInterval(() => {
        document.title = 'Textutils - Amazing';
      }, 1500);
      setInterval(() => {
        document.title = 'Textutils Install Now';
      }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
      document.title = 'Textutils - Light-Mode';


    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />}/> */}
            {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode}></TextForm>}/> */}
            <TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode}></TextForm>
            {/* <About></About> */}
          {/* </Routes> */}
        </div>
      {/* </Router > */}
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    // const colorArray = ['primay', 'success', 'danger', 'warning']
    // colorArray.map(element => document.body.classList.remove("bg-" + element));
    // document.body.classList.add("bg-" + cls);
    
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "#27092e"
      alertInput("Dark Mode Activate.", "success");
      // document.title = "TextUtils - Dark";
      // setInterval(() => {
        //   document.title = "TextUtils is amazing";
        // }, 1500);
        // setInterval(() => {
          //   document.title = "Install TextUtils now";
          // }, 2000);
        } else {
          setMode('light');
          document.body.style.backgroundColor = "white"
          alertInput("Light Mode Activate.", "success")
          // document.title = "TextUtils - Light";
        }
  }

  const [alertOutput, setAlertOutput] = useState(null);
  const alertInput = (msg, type) => {
    setAlertOutput({
      message: msg,
      type: type
    })
  }

  setTimeout(() => {
    setAlertOutput(null);
  }, 1500);

  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
        {/* <Navbar /> */}
        <Navbar title='TextUtils' mode={mode}  toggleMode={toggleMode} />
        <Alert alertOutput={alertOutput} />
        <div className="container">
          {/* <About/> */}

          <Routes>
            <Route exact path="/about" element={<About mode={mode}/> } />

            <Route exact  path="/" element={<TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces, web extractor" mode={mode} alertInput={alertInput} />} />
           
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

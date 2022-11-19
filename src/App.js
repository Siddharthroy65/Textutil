import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether Dark mode is enabel or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#bdbfbb ";
      showAlert("Dark mode is enabel", "Success");
      document.title = "Textutils dark mode";
      // setInterval(()=>{
      //   document.title = "Install the Application";
      // },2000);
      // setInterval(()=>{
      //   document.title = "Click on the link";
      // },1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabel", "Success");
      document.title = "Textutils Light mode";
    }
  };
  return (
    <>
   {/* <Router>*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/*<Switch>*/}
          {/*<Route exact path="/about">
            <About />
          </Route>*/}
{/* use exact before path it will opne your exact file*/}       
   {/*<Route exact path="/home">
            <TextForm
              showAlert={showAlert}
              heading="Enter The Text To Analyze Below"
              mode={mode}
            />
          
          </Route>*/}
          <TextForm
              showAlert={showAlert}
              heading="Enter The Text To Analyze Below"
              mode={mode}
            />
        {/*</Switch>*/}
      </div>
   {/* </Router>*/}
    </>
  );
}

export default App;

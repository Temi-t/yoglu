import React from 'react';
import Logo from '../features/login/Logo.js';
import UserName from '../features/login/UserName.js';
import Package from '../features/login/Package.js';
import Phone from '../features/login/Phone.js';
import OtpInputs from '../features/login/OtpInputs';
import Password from '../features/login/Password.js';
import Email from '../features/login/Email.js';
import UserLocation from '../features/login/UserLocation.js';
import GeoCoding from '../features/login/GeoCoding';
import CurrentLocation from '../features/login/CurrentLocation';
import FinishReg from '../features/login/FinishReg';
import FinishReg2 from '../features/login/FinishReg2';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IconContext } from "react-icons";
import RegisterProvider from '../contexts/RegisterContext.js';

function App() {
  const iconStyle = {
    size: "1.5em"
  }
  return (
    <IconContext.Provider value={iconStyle} >
      <Router>
        <div className="App">
          <RegisterProvider>
            <Switch>
              <Route path="/yoglu" exact component={Logo} />
              <Route path="/username" component={UserName} />
              <Route path="/package" component={Package}  />
              <Route path="/phone" component={Phone}  />
              <Route path="/otpInputs" component={OtpInputs}  />
              <Route path="/password" component={Password}  />
              <Route path="/email" component={Email}  />
              <Route path="/userlocation" component={UserLocation}  />
              <Route path="/currentLocation" component={CurrentLocation}  />
              <Route path="/geocoding" component={GeoCoding}  /> 
              <Route path="/finishReg" component={FinishReg}  /> 
              <Route path="/finishReg2" component={FinishReg2}  />             
            </Switch>
          </RegisterProvider>
        </div>
      </Router>
    </IconContext.Provider>
  );
}

export default App;

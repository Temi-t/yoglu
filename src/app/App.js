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
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IconContext } from "react-icons";

function App() {
  const iconStyle = {
    size: "1.5em"
  }
  return (
    <IconContext.Provider value={iconStyle} >
      <Router>
        <div className="App">
            <Switch>
              <Route path="/yoglu" exact component={Logo} />
              <Route path="/username" component={UserName} />
              <Route path="/package" component={Package}  />
              <Route path="/phone" component={Phone}  />
              <Route path="/otpInputs" component={OtpInputs}  />
              <Route path="/password" component={Password}  />
              <Route path="/email" component={Email}  />
              <Route path="/userlocation" component={UserLocation}  />
              <Route path="/geocoding" component={GeoCoding}  /> 
            </Switch>
        </div>
      </Router>
    </IconContext.Provider>
  );
}

export default App;

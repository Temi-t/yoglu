import Logo from '../features/login/Logo.js';
import UserName from '../features/login/UserName.js';
import Package from '../features/login/Package.js';
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
              <Route path="/" exact component={Logo} />
              <Route path="/username" component={UserName} />
              <Route path="/package" component={Package}  />
            </Switch>
        </div>
      </Router>
    </IconContext.Provider>
  );
}

export default App;

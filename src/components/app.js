
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import '../style.scss';
import Welcome from './mainPage';
import About from './about';
// import References from './references';
import FallBack from './doesntExist';
import Nav from './navbar';
import Macro from './macro';
import Micro from './micro';


const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          {/* <Route path="/references" component={References} /> */}
          <Route path="/about" component={About} />
          <Route path="/Macro" component={Macro} />
          <Route path="/Micro" component={Micro} />

          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

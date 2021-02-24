import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import Header from './components/Header';
import ProfileList from './components/ProfileList';
import ProfileDetail from './components/ProfileDetail';


function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
              <ProfileList/>
          </Route>
          <Route exact path="/profiles/:fullname">
              <ProfileDetail/>
          </Route>
          <Route path="/">
              <h1>404</h1>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

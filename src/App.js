import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Components
import Header from './components/Header';
import ProfileList from './components/ProfileList';


function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route exact path="/profiles">
              <ProfileList/>
          </Route>
          <Route path="/">
              <h1>404</h1>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

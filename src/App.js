import React from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import Header from './components/Header';
import ProfileList from './components/ProfileList';
import ProfileDetail from './components/ProfileDetail';


function App() {

  const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={1000}
      >
        <Switch location={location}>
          <Route exact path="/">
            <ProfileList />
          </Route>
          <Route exact path="/profiles/:fullname">
            <ProfileDetail />
          </Route>
          <Route path="/">
            <h1>404</h1>
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));

  return (
    <Router>
      <Header />
      <AnimatedSwitch />
    </Router>
  );
}

export default App;

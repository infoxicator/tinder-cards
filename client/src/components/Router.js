import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ActorsList from './ActorsList';
import HiredActors from './HiredActors';
import NavBar from './NavBar';

const RouterComponent = () => {
  return (
    <Router ref={router => (this.router = router)}>
      <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={ActorsList} />
              <Route path="/hired" component={HiredActors} />
            </Switch>
          </div>
    </Router>
  );
};

export default RouterComponent;

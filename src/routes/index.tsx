import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '../helpers/PrivateRoute';

import ListDragons from '../pages/ListDragons';
import CreateDragon from '../pages/CreateDragon';
import DetailDragon from '../pages/DetailDragon';
import Login from '../pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <PrivateRoute path="/list" component={ListDragons} />
    <PrivateRoute path="/createDragon" component={CreateDragon} />
    <PrivateRoute path="/detailDragon" component={DetailDragon} />
  </Switch>
);

export default Routes;

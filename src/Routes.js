import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import {RouteWithLayout} from './components';
// import {PrivateRouteWithLayout} from './components';
import {Main} from './layouts';
import {Dashboard, Landing, Forums, Dummy} from './views';

import PropTypes from 'prop-types';

const Routes = props => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/Dashboard"
      />

      <RouteWithLayout
        component={Dashboard}
        exact
        layout={Main}
        path="/Dashboard"
      />
      <RouteWithLayout
        component={Landing}
        exact
        layout={Main}
        path="/Landing"
      />
      <RouteWithLayout
        component={Forums}
        exact
        layout={Main}
        path="/Forums"
      />
      {/* <RouteWithLayout
        component={Dummy}
        exact
        layout={Main}
        path="/Dummy"
      /> */}

    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;

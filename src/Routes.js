import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import {RouteWithLayout} from './components';
// import {PrivateRouteWithLayout} from './components';
import {Main} from './layouts';
import {Dashboard, Landing, Forums, ForumSection, Dummy} from './views';

import PropTypes from 'prop-types';

const Routes = props => {
  return (
    <Switch>
      <Redirect exact from="/" to="/Dashboard" />

      <RouteWithLayout
        component={Dashboard}
        exact
        layout={Main}
        path="/dashboard"
      />
      <RouteWithLayout
        component={Landing}
        exact
        layout={Main}
        path="/landing"
      />
      <RouteWithLayout component={Forums} exact layout={Main} path="/Forums" />
      <RouteWithLayout
        component={ForumSection}
        exact
        layout={Main}
        path="/forums/:slug"
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

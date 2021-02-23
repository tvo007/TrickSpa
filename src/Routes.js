import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import {RouteWithLayout} from './components';
import {PrivateRouteWithLayout} from './components';
import {Main} from './layouts';
import {
  Dashboard,
  Landing,
  Forums,
  ForumSection,
  Post,
  Dummy,
  CreatePost,
} from './views';

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
     

      <PrivateRouteWithLayout
        component={Forums}
        exact
        layout={Main}
        path="/private-forums-test"
      />
      /**PRIVATE ROUTE IN PROGRESS */

      <RouteWithLayout component={Forums} exact layout={Main} path="/Forums" />

      <RouteWithLayout
        component={ForumSection}
        exact
        layout={Main}
        path="/forums/:forumSlug"
      />

      <RouteWithLayout
        component={CreatePost}
        exact
        layout={Main}
        path="/forums/:forumSlug/createpost"
      />

      {/**create post page */}

      <RouteWithLayout
        component={Post}
        exact
        layout={Main}
        path="/forums/:forumSlug/:postSlug"
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

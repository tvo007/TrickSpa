import React from 'react';
import {Route, Redirect} from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';

const PrivateRouteWithLayout = props => {
  const {layout: Layout, component: Component, ...rest} = props;

  const userLogin = useSelector (state => state.userLogin);
  const {userInfo} = userLogin;
  //check to see if userLogin exists in state, if not true redirect to login

  return (
    <Route
      {...rest}
      render={matchProps =>
        !userInfo
          ? <Redirect to="/Auth" />
          : <Layout>
              <Component {...matchProps} />
            </Layout>}
    />
  );
};

// PrivateRouteWithLayout.propTypes = {};

export default PrivateRouteWithLayout;

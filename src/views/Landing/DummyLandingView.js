import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PageHeading from '../../components/PageHeading';
import DummySignupForm from './components/DummySignUpForm';
import DummySigninForm from './components/DummySigninForm';

const DummyLandingView = () => {
  const [showSignUp, setShowSignup] = useState(false);

  const showSignUpHandler = e => {
    e.preventDefault();
    setShowSignup(true);
  };

  const showSignInHandler = e => {
    e.preventDefault();
    setShowSignup(false);
  };

  return (
    <Grid container item justify="center" lg={6} md={9}>
      {/* <PageHeading title="Landing" /> */}
      <Grid item xs={12}>
        {showSignUp ? (
          <DummySignupForm
            onClick={showSignInHandler}
            setShowSignup={setShowSignup}
          />
        ) : (
          <DummySigninForm onClick={showSignUpHandler} />
        )}
      </Grid>
    </Grid>
  );
};

DummyLandingView.propTypes = {};

export default DummyLandingView;

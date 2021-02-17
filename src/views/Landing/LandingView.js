import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import PageHeading from '../../components/PageHeading';
import SignupForm from './components/SignupForm';
import SigninForm from './components/SigninForm';

const LandingView = props => {
  const [showSignUp, setShowSignup] = useState (false);

  const showSignUpHandler = e => {
    e.preventDefault ();
    setShowSignup (true);
  };

  const showSignInHandler = e => {
    e.preventDefault ();
    setShowSignup (false);
  };

  return (
    <div>

      <PageHeading title="Landing" />
      <Grid container justify="center">
        <Grid item md={6} sm={9} xs={12}>
          {showSignUp
            ? <SignupForm onClick ={showSignInHandler}/>
            : <SigninForm onClick={showSignUpHandler} />}

        </Grid>
      </Grid>
    </div>
  );
};

LandingView.propTypes = {};

export default LandingView;

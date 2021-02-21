import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PageHeading from '../../components/PageHeading';
import DummySignupForm from './components/DummySignUpForm';
// import SigninForm from './components/SigninForm';

const DummyLandingView = props => {
  return (
    <Grid container item justify="center" md={9}>
      <PageHeading title="Landing" />
      <Grid item xs={12}>
        <DummySignupForm />
      </Grid>
    </Grid>
  );
};

DummyLandingView.propTypes = {};

export default DummyLandingView;

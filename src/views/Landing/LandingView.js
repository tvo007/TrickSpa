import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import PageHeading from '../../components/PageHeading';
import SignupForm from './components/SignupForm';
import SigninForm from './components/SigninForm';

const LandingView = props => {
  return (
    <div>

      <PageHeading title="Landing" />
      <Grid
        container
        justify="center"
      >
        <Grid
          item
          md={6}
          sm={9}
          xs={12}
        >
          <SignupForm />
        </Grid>
      </Grid>
    </div>
  );
};

LandingView.propTypes = {};

export default LandingView;

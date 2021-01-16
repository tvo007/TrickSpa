import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Grid} from '@material-ui/core';
import PageHeading from '../../components/PageHeading';

const LandingView = props => {
  return (
    <div>

      <PageHeading title="Landing" />
      <Grid>
        <Typography variant="body1">THIS IS THE Landing</Typography>
      </Grid>
    </div>
  );
};

LandingView.propTypes = {};

export default LandingView;

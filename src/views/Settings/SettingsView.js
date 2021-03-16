import React from 'react';
// import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
//   Card,
//   CardHeader,
//   CardContent,
//   Divider,
} from '@material-ui/core';
import PageHeading from '../../components/PageHeading';

const SettingsView = props => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <PageHeading title="Settings" />
      </Grid>
      <Typography>This is the settings page</Typography>
    </Grid>
  );
};

// SettingsView.propTypes = {};

export default SettingsView;

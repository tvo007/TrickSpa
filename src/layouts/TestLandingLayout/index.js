import React from 'react';
import { Grid } from '@material-ui/core';

const LandingLayout = ({ children }) => {
  return (
    <Grid container justify="center" xs={12}>
      {children}
    </Grid>
  );
};

export default LandingLayout;

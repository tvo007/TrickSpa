import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles (theme => ({
  root: {
    padding: theme.spacing (4),
  },
}));

function Dashboard (props) {
  const classes = useStyles ();

  return (
    <div className={classes.root}>
     
      <Grid>
        <Typography variant="h1">THIS IS THE DASHBOARD</Typography>
      </Grid>

    </div>
  );
}

Dashboard.propTypes = {};

export default Dashboard;

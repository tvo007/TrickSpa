import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles (theme => ({
  root: {
    padding: theme.spacing (4),
  },
}));

function Landing (props) {
  const classes = useStyles ();

  return (
    <div className={classes.root}>
     
          <Grid>
            <Typography>THIS IS THE Landing</Typography>
          </Grid>

    </div>
  );
}

Landing.propTypes = {};

export default Landing;

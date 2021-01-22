//to be deleted

import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  TextField,
  Button,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles (theme => ({
  buttonText: {
    color: theme.palette.primary.contrastText,
  },
}));

const Reply = props => {
  const classes = useStyles ();

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <TextField fullWidth variant="outlined" placeholder="Leave a comment" />
      </Grid>
      <Grid item container justify="flex-end">
        <Button color="primary" variant="contained" size="small">
          <Typography variant="button" className={classes.buttonText}>
            Reply <CreateIcon fontSize="small" />
          </Typography>
        </Button>
      </Grid>

    </Grid>
  );
};

Reply.propTypes = {};

export default Reply;

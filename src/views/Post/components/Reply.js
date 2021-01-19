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

const Reply = props => {
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography>
          Reply
        </Typography>
      </Grid>
      <Grid item>
        <TextField fullWidth variant="outlined" placeholder="Leave a comment" />

      </Grid>

    </Grid>
  );
};

Reply.propTypes = {};

export default Reply;

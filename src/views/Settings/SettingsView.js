import React from 'react';
// import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider
} from '@material-ui/core';
import PageHeading from '../../components/PageHeading';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    marginBottom: theme.spacing(2)
  },
  user: {},
  basic: {}
}));

const SettingsView = props => {
  const classes = useStyles();

  const username = 'Jon Snow';

  return (
    <Grid container spacing={4} xs={12}>
      <Grid item xs={12}>
        <PageHeading title={`Settings for ${username}`} />
      </Grid>
      <Grid item xs={4}>
        <Card>
          <Typography>Profile</Typography>
        </Card>
        <Typography>Account</Typography>
      </Grid>
      <Grid item xs={8}>
        <Card className={classes.card}>
          <CardHeader title="User" />
          <CardContent>
            <Typography>Some Fields go here</Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardHeader title="Basic" />
          <CardContent>
            <Typography>Some Fields go here</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

// SettingsView.propTypes = {};

export default SettingsView;

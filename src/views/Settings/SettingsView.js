import React from 'react';
// import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Button,
  ButtonGroup,
  TextField
} from '@material-ui/core';
import PageHeading from '../../components/PageHeading';
import ProfileSettings from './components/ProfileSettings';
import AccountSettings from './components/AccountSettings';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    marginBottom: theme.spacing(2)
  },
  button: {
    justifyContent: 'start'
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
        <ButtonGroup
          aria-label="vertical outlined primary button group"
          color="primary"
          fullWidth
          orientation="vertical">
          <Button
            className={classes.button}
            disableElevation
            variant="contained">
            Profile
          </Button>
          <Button className={classes.button} disableElevation>
            Account
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={8}>
        <AccountSettings />
      </Grid>
    </Grid>
  );
};

// SettingsView.propTypes = {};

export default SettingsView;

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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    marginBottom: theme.spacing(2)
  },
  button: {
    justifyContent: 'start'
  },
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      width: '100%',
      margin: '1rem auto'
    }
  },
  submitCard: {
    display: 'flex',
    justifyContent: 'center'
  },
  submitButton: {
    margin: '1rem auto'
  },
  submitInput: {
    border: 'none',
    background: 'none',
    outline: 'none',
    color: 'white',
    fontSize: '1rem',
    width: '100%',
    height: '100%',
    cursor: 'pointer'
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
        <form>
          <Card className={classes.card}>
            <CardHeader title="User" />
            <CardContent className={classes.formContent}>
              <TextField
                // error={errors.name ? true : false}
                fullWidth
                // helperText={errors.name ? errors.name.message : null}
                id="name"
                // inputRef={register}
                name="name"
                placeholder="Enter your name"
              />
              <TextField
                // error={errors.email ? true : false}
                // helperText={errors.email ? errors.email.message : null}
                id="email"
                // inputRef={register}
                name="email"
                placeholder="Enter your email"
              />
              <TextField
                // error={errors.username ? true : false}
                // helperText={errors.username ? errors.username.message : null}
                id="username"
                // inputRef={register}
                name="username"
                placeholder="Enter your username"
              />
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardHeader title="Basic" />
            <CardContent className={classes.formContent}>
              <TextField
                // error={errors.location ? true : false}
                fullWidth
                // helperText={errors.location ? errors.location.message : null}
                id="location"
                // inputRef={register}
                name="location"
                placeholder="Enter your location"
              />
              <TextField
                // error={errors.bio ? true : false}
                // helperText={errors.bio ? errors.bio.message : null}
                id="bio"
                // inputRef={register}
                name="bio"
                placeholder="Enter your bio"
              />
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardHeader title="Links" />
            <CardContent className={classes.formContent}>
              <TextField
                // error={errors.youtube ? true : false}
                fullWidth
                // helperText={errors.youtube ? errors.youtube.message : null}
                id="youtube"
                // inputRef={register}
                name="youtube"
                placeholder="Enter your YouTube URL"
              />
              <TextField
                // error={errors.facebook ? true : false}
                // helperText={errors.facebook ? errors.facebook.message : null}
                id="facebook"
                // inputRef={register}
                name="facebook"
                placeholder="Enter your Facebook URL"
              />
              <TextField
                // error={errors.instagram ? true : false}
                // helperText={errors.instagram ? errors.instagram.message : null}
                id="instagram"
                // inputRef={register}
                name="instagram"
                placeholder="Enter your Instagram URL"
              />
            </CardContent>
          </Card>
          <Card className={classes.submitCard}>
            <Button
              className={classes.submitButton}
              color="primary"
              variant="contained">
              <input
                className={classes.submitInput}
                type="submit"
                value="Save profile information"
              />
            </Button>
          </Card>
        </form>
      </Grid>
    </Grid>
  );
};

// SettingsView.propTypes = {};

export default SettingsView;

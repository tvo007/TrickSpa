import React, { useEffect } from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import useStyles from '../FormStyles';
import { useDispatch, useSelector } from 'react-redux';
import { register as registerUser } from '../../../actions/userActions';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { showSnackbar } from '../../../actions/alertActions';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('Please enter a username'),
  email: yup
    .string()
    .email()
    .required('Please enter your email.'),
  password: yup.string().required('Please enter your password.')
});

const DummySignupForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(showSnackbar('Login successful'));
      history.push('/forums');
    } else if (error) {
      dispatch(showSnackbar('Something went wrong.'));
    }
  }, [history, userInfo, error]);

  const onSubmit = data => {
    alert(JSON.stringify(data));
    dispatch(registerUser(data));
  };

  const classes = useStyles();

  return (
    <Paper elevation={5}>
      <Grid container>
        <Grid
          alignItems="center"
          className={classes.leftSide}
          container
          item
          justify="center"
          xs={6}>
          <Grid item>
            <Typography align="center" variant="h2">
              Connectrix
            </Typography>
            <Typography align="center" variant="body1">
              Connecting trickers around the world.
            </Typography>
          </Grid>
        </Grid>

        <Grid className={classes.rightSide} item xs={6}>
          <Typography align="center" variant="h2">
            Create an Account
          </Typography>
          <form
            action="#"
            className={classes.form}
            onSubmit={handleSubmit(onSubmit)}>
            <TextField
              error={Boolean(errors.email)}
              helperText={errors.email ? errors.email.message : null}
              inputRef={register}
              label="Email"
              name="email"
              placeholder="Email"
            />
            <TextField
              error={Boolean(errors.username)}
              helperText={errors.username ? errors.username.message : null}
              inputRef={register}
              label="Username"
              name="username"
              placeholder="Username"
            />
            <TextField
              error={Boolean(errors.password)}
              helperText={errors.password ? errors.password.message : null}
              inputRef={register}
              label="Password"
              name="password"
              placeholder="Password"
              type="password"
            />
            <Button color="primary" variant="contained">
              <input
                className={classes.submit}
                type="submit"
                value="Create Account"
              />
            </Button>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DummySignupForm;

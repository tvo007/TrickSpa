import React, { useEffect } from 'react';
import { Paper, Grid, Typography, TextField, Button } from '@material-ui/core';
import useStyles from '../FormStyles';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/userActions';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { showSnackbar } from '../../../actions/alertActions';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required('Please enter your email.'),
  password: yup.string().required('Please enter your password.')
});

const DummySigninForm = () => {
  // const {values, errors, handleChange, handleSubmit} = useForm ({
  //   username: '',
  //   password: '',
  // });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      dispatch(showSnackbar('Login successful'));
      history.push('/forums');
    } else if (error) {
      dispatch(showSnackbar('Something went wrong.'));
    }
  }, [history, userInfo, error]);

  const submitHandler = data => {
    // e.preventDefault ();
    // if (isSectionLoading) {
    //   dispatch (showSnackbar ('Please try again'));
    // } else if (section) {
    //   dispatch (
    //     createPost ({...data, section: {id: section.id}, user: {id: 1}})
    //   );
    //   dispatch (showSnackbar ('Success'));
    dispatch(login(data));
  };

  // console.log ({...data, section: {id: section.id}, user: {id: 1}});

  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={5}>
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
            Sign In
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
            <TextField
              error={errors.email ? true : false}
              fullWidth
              helperText={errors.email ? errors.email.message : null}
              id="email"
              inputRef={register}
              name="email"
              placeholder="Enter your email to login"
            />
            <TextField
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : null}
              id="password"
              inputRef={register}
              name="password"
              placeholder="Enter your password"
            />
            <Button color="primary" variant="contained">
              <input className={classes.submit} type="submit" value="Sign In" />
            </Button>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DummySigninForm;

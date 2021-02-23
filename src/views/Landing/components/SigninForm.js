import React, {useEffect} from 'react';
import {Paper, Typography, TextField, Button, Link} from '@material-ui/core';
import useStyles from '../FormStyles';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../actions/userActions';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {showSnackbar} from '../../../actions/alertActions';
import * as yup from 'yup';
import {CLEAR_USER} from 'constants/userConstants';

const schema = yup.object ().shape ({
  email: yup.string ().required ('Please enter your email.'),
  password: yup.string ().required ('Please enter your password.'),
});

const SigninForm = ({onClick}) => {
  // const {values, errors, handleChange, handleSubmit} = useForm ({
  //   username: '',
  //   password: '',
  // });
  const {register, handleSubmit, errors} = useForm ({
    resolver: yupResolver (schema),
  });

  const userLogin = useSelector (state => state.userLogin);
  const {error, userInfo} = userLogin;

  const history = useHistory ();
  const dispatch = useDispatch ();

  useEffect (
    () => {
      if (userInfo) {
        dispatch (showSnackbar ('Login successful'));
        history.push ('/forums');
      } else if (error) {
        dispatch (showSnackbar ('Something went wrong.'));
      }
    },
    [history, userInfo, error, dispatch]
  );

  const submitHandler = data => {
    // e.preventDefault ();
    // if (isSectionLoading) {
    //   dispatch (showSnackbar ('Please try again'));
    // } else if (section) {
    //   dispatch (
    //     createPost ({...data, section: {id: section.id}, user: {id: 1}})
    //   );
    //   dispatch (showSnackbar ('Success'));
    dispatch (login (data));
  };

  // console.log ({...data, section: {id: section.id}, user: {id: 1}})

  const classes = useStyles ();

  return (
    <Paper className={classes.root}>
      <Typography align="center" variant="h2">
        Sign In
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit (submitHandler)}>
        <TextField
          fullWidth
          name="email"
          id="email"
          inputRef={register}
          placeholder="Enter your email to login"
          helperText={errors.email ? errors.email.message : null}
          error={errors.email ? true : false}
        />
        <TextField
          name="password"
          id="password"
          inputRef={register}
          placeholder="Enter your password"
          helperText={errors.password ? errors.password.message : null}
          error={errors.password ? true : false}
          type="password"
        />
        <Button color="primary" variant="contained">
          <input className={classes.submit} type="submit" value="Sign In" />
        </Button>
        <Typography><Link href="#" onClick={onClick}>Sign Up</Link></Typography>
      </form>

    </Paper>
  );
};

export default SigninForm;

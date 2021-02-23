import React, {useEffect, useState} from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
} from '@material-ui/core';
import useStyles from '../../Landing/FormStyles';
import {useForm} from 'react-hook-form';

import {signup} from '../../../actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup';
import {showSnackbar} from '../../../actions/alertActions';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import * as yup from 'yup';

const schema = yup.object ().shape ({
  username: yup.string ().required ('Please enter a username'),
  email: yup.string ().required ('Please enter your email.'),
  password: yup.string ().required ('Please enter your password.'),
});

const array = [{text: 'Bruh'}, {text: 'Bruh 2'}, {text: 'Bruh 3'}];

const SignupForm = ({onClick, setShowSignup}) => {
  const {register, handleSubmit, errors} = useForm ({
    resolver: yupResolver (schema),
  });

  const [errorArray, setErrorArray] = useState ();

  const userRegister = useSelector (state => state.userRegister);
  const {error: authError, success} = userRegister; //userInfo loads when successfully registers, authError is backend errors
  const history = useHistory ();
  const dispatch = useDispatch ();

  useEffect (
    () => {
      if (success) {
        dispatch (showSnackbar ('Registration successful'));
        setShowSignup (false); //changes view to signin page on success
      } else if (authError) {
        // dispatch (showSnackbar ('Something went wrong.'));
        setErrorArray (authError[0].messages);
        // console.log(authError[0].messages)
      }
    },
    [history, success, authError, dispatch, setShowSignup, setErrorArray]
  );

  const submitHandler = data => {
    dispatch (signup (data));
    // dispatch (showSnackbar ('Success'));
  };

  const classes = useStyles ();

  return (
    <Paper className={classes.root}>
      <Typography align="center" variant="h2">
        Create an Account
      </Typography>
      <form
        action="#"
        className={classes.form}
        onSubmit={handleSubmit (submitHandler)}
      >
        <TextField
          name="email"
          id="email"
          inputRef={register}
          placeholder="Enter your email to register"
          helperText={errors.email ? errors.email.message : null}
          error={errors.email ? true : false}
        />
        <TextField
          name="username"
          id="username"
          inputRef={register}
          placeholder="Enter a username to register"
          helperText={errors.username ? errors.username.message : null}
          error={errors.username ? true : false}
        />
        <TextField
          name="password"
          id="password"
          inputRef={register}
          placeholder="Enter a password"
          helperText={errors.password ? errors.password.message : null}
          error={errors.password ? true : false}
          type="password"
        />
        <Button color="primary" variant="contained">
          <input
            className={classes.submit}
            type="submit"
            value="Create Account"
          />
        </Button>
        <Typography><Link href="#" onClick={onClick}>Sign In</Link></Typography>
      </form>
      <Grid>
        {errorArray
          ? errorArray.map ((item, index) => {
              return (
                <Typography key={index}>
                  <ErrorOutlineIcon fontSize="small" /> {item.message}
                </Typography>
              );
            })
          : null}
      </Grid>

    </Paper>
  );
};

export default SignupForm;

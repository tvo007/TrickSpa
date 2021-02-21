import React from 'react';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import useStyles from '../FormStyles';

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

  const onSubmit = data => alert(JSON.stringify(data));

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
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
    </Paper>
  );
};

export default DummySignupForm;

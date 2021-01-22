import React from 'react';
import useForm from '../../../common/useForm';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '2rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    width: '90%',
    minHeight: '5rem',
    margin: '0 auto',
    '& > *': {
      width: '80%',
      margin: '1rem auto'
    }
  },
  submit: {
    border: 'none',
    background: 'none',
    outline: 'none',
    color: 'white',
    width: '100%',
    height: '100%',
    cursor: 'pointer'
  }
});

const SignupForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    email: '',
    username: '',
    password: ''
  });

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography
        align="center"
        variant="h2"
      >
        Sign In
      </Typography>
      <form
        action="#"
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <TextField 
          error={Boolean(errors.email)}
          helperText={errors.email}
          label="Email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          value={values.email}
        />
        <TextField 
          error={Boolean(errors.username)}
          helperText={errors.username}
          label="Username"
          name="username"
          onChange={handleChange}
          placeholder="Username"
          value={values.username}
        />
        <TextField 
          error={Boolean(errors.password)}
          helperText={errors.password}
          label="Password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          type="password"
          value={values.password}
        />
        <Button
          color="primary"
          variant="contained"
        >
          <input
            className={classes.submit}
            type="submit"
            value="Sign In"
          />
        </Button>
      </form>
    </Paper>
  );
}

export default SignupForm;

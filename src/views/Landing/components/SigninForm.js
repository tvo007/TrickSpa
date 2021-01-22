import React from 'react';
import useForm from '../../../common/useForm';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import useStyles from '../FormStyles';

const SignupForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
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

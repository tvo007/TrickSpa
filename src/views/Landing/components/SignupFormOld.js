import React from 'react';
import useForm from '../../../common/useForm';
import {Paper, Typography, TextField, Button, Link} from '@material-ui/core';
import useStyles from '../FormStyles';

const SignupFormOld = ({onClick}) => {
  const {values, errors, handleChange, handleSubmit} = useForm ({
    email: '',
    username: '',
    password: '',
  });

  const classes = useStyles ();

  return (
    <Paper className={classes.root}>
      <Typography align="center" variant="h2">
        Create an Account
      </Typography>
      <form action="#" className={classes.form} onSubmit={handleSubmit}>
        <TextField
          error={Boolean (errors.email)}
          helperText={errors.email}
          label="Email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          value={values.email}
        />
        <TextField
          error={Boolean (errors.username)}
          helperText={errors.username}
          label="Username"
          name="username"
          onChange={handleChange}
          placeholder="Username"
          value={values.username}
        />
        <TextField
          error={Boolean (errors.password)}
          helperText={errors.password}
          label="Password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          type="password"
          value={values.password}
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
    </Paper>
  );
};

export default SignupFormOld;

import React from 'react';
// import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField
} from '@material-ui/core';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import useStyles from '../FormStyles';

const schema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  username: yup.string(),
  location: yup.string(),
  bio: yup.string(),
  youtube: yup.string(),
  facebook: yup.string(),
  instagram: yup.string()
});

const ProfileSettings = props => {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const submitHandler = data => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Card className={classes.card}>
        <CardHeader title="User" />
        <CardContent className={classes.formContent}>
          <TextField
            error={errors.name ? true : false}
            fullWidth
            helperText={errors.name ? errors.name.message : null}
            id="name"
            inputRef={register}
            label="Name"
            name="name"
            placeholder="Enter your name"
          />
          <TextField
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : null}
            id="email"
            inputRef={register}
            label="Email"
            name="email"
            placeholder="Enter your email"
          />
          <TextField
            error={errors.username ? true : false}
            helperText={errors.username ? errors.username.message : null}
            id="username"
            inputRef={register}
            label="Username"
            name="username"
            placeholder="Enter your username"
          />
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader title="Basic" />
        <CardContent className={classes.formContent}>
          <TextField
            error={errors.location ? true : false}
            fullWidth
            helperText={errors.location ? errors.location.message : null}
            id="location"
            inputRef={register}
            label="Location"
            name="location"
            placeholder="Enter your location"
          />
          <TextField
            error={errors.bio ? true : false}
            helperText={errors.bio ? errors.bio.message : null}
            id="bio"
            inputRef={register}
            label="Bio"
            name="bio"
            placeholder="Enter your bio"
          />
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader title="Links" />
        <CardContent className={classes.formContent}>
          <TextField
            error={errors.youtube ? true : false}
            fullWidth
            helperText={errors.youtube ? errors.youtube.message : null}
            id="youtube"
            inputRef={register}
            label="Youtube URL"
            name="youtube"
            placeholder="Enter your YouTube URL"
          />
          <TextField
            error={errors.facebook ? true : false}
            helperText={errors.facebook ? errors.facebook.message : null}
            id="facebook"
            inputRef={register}
            label="Facebook URL"
            name="facebook"
            placeholder="Enter your Facebook URL"
          />
          <TextField
            error={errors.instagram ? true : false}
            helperText={errors.instagram ? errors.instagram.message : null}
            id="instagram"
            inputRef={register}
            label="Instagram URL"
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
  );
};

export default ProfileSettings;

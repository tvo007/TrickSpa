import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import useStyles from '../FormStyles';

const schema = yup.object ().shape ({
  name: yup.string (),
  username: yup.string (),
  avatar: yup.string (),
  alias: yup.string (),
  location: yup.string (),
  bio: yup.string (),
  youtube: yup.string (),
  facebook: yup.string (),
  instagram: yup.string (),
  twitter: yup.string (),
  tiktok: yup.string (),
  sampler: yup.string (),
  orgs: yup.string (),
  gatherings: yup.string (),
});

const ProfileSettings = ({user}) => {
  const classes = useStyles ();

  const {register, handleSubmit, errors} = useForm ({
    resolver: yupResolver (schema),
    defaultValues: {
      name: 'Tim Vo',
      username: user.username || '',
    },
  });

  const submitHandler = data => alert (JSON.stringify (data));

  return (
    <form onSubmit={handleSubmit (submitHandler)}>
      <Card className={classes.card}>
        <CardHeader title={<Typography variant="h3">User</Typography>} />
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
            error={errors.username ? true : false}
            helperText={errors.username ? errors.username.message : null}
            id="username"
            inputRef={register}
            label="Username"
            name="username"
            placeholder="Enter your username"
          />
          <TextField
            error={errors.avatar ? true : false}
            helperText={errors.avatar ? errors.avatar.message : null}
            id="avatar"
            inputRef={register}
            label="Avatar"
            name="avatar"
            placeholder="Enter a url to your avatar img"
          />
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader title={<Typography variant="h3">Basics</Typography>} />
        <CardContent className={classes.formContent}>
          <TextField
            error={errors.alias ? true : false}
            fullWidth
            helperText={errors.alias ? errors.alias.message : null}
            id="alias"
            inputRef={register}
            label="Tricker Alias"
            name="alias"
            placeholder="Enter the name trickers know you by"
          />
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
        <CardHeader title={<Typography variant="h3">Socials</Typography>} />
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
          <TextField
            error={errors.twitter ? true : false}
            helperText={errors.twitter ? errors.twitter.message : null}
            id="twitter"
            inputRef={register}
            label="Twitter URL"
            name="twitter"
            placeholder="Enter your twitter URL"
          />
          <TextField
            error={errors.twitter ? true : false}
            helperText={errors.tiktok ? errors.tiktok.message : null}
            id="tiktok"
            inputRef={register}
            label="Tiktok URL"
            name="tiktok"
            placeholder="Enter your tiktok URL"
          />

        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardHeader
          title={<Typography variant="h3">Your Sampler(s)</Typography>}
        />
        <CardContent className={classes.formContent}>
          <TextField
            error={errors.sampler ? true : false}
            fullWidth
            helperText={errors.sampler ? errors.sampler.message : null}
            id="sampler"
            inputRef={register}
            label="Sampler URL"
            name="sampler"
            placeholder="Enter a sampler URL for the world to see"
          />
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader title={<Typography variant="h3">Communities</Typography>} />
        <CardContent className={classes.formContent}>
          <TextField
            error={errors.orgs ? true : false}
            fullWidth
            helperText={errors.orgs ? errors.orgs.message : null}
            id="orgs"
            inputRef={register}
            label="Orgs"
            name="orgs"
            placeholder="Let trickers know your org/team affiliations"
          />
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader title={<Typography variant="h3">Past Events</Typography>} />
        <CardContent className={classes.formContent}>
          <TextField
            error={errors.gatherings ? true : false}
            fullWidth
            helperText={errors.gatherings ? errors.gatherings.message : null}
            id="gatherings"
            inputRef={register}
            label="Gatherings"
            name="gatherings"
            placeholder="Gatherings you've been to"
          />
        </CardContent>
      </Card>
      <Card className={classes.submitCard}>
        <Button
          className={classes.submitButton}
          color="primary"
          variant="contained"
        >
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

import React, {useState, useEffect} from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';
import OrgsList from './profile_components/Orgs/OrgsList'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {showSnackbar} from '../../../actions/alertActions';
import {updateProfile} from '../../../actions/profileActions';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import useStyles from '../FormStyles';
import profile from 'reducers/profile';

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

const ProfileSettings = ({
  userInfo,
  userProfile,
  profileLoaded,
  isLoggedIn,
}) => {
  const classes = useStyles ();

  const dispatch = useDispatch ();
  const history = useHistory ();

  const updateProfileReducer = useSelector (state => state.updateProfile);
  const {
    loading: updateProfileLoading,
    error: updateProfileError,
    success: successUpdate,
  } = updateProfileReducer;

  const [mappedOrgs, setMappedOrgs] = useState ([]);

  useEffect (
    () => {
      if (profileLoaded) {
        setMappedOrgs (userProfile.orgs.map (org => org) || null);
      } else {
        setMappedOrgs ('');
      }
    },
    [profileLoaded, userProfile.orgs]
  );

  const {register, handleSubmit, errors} = useForm ({
    resolver: yupResolver (schema),
    defaultValues: {
      name: `${userProfile.first_name} ${userProfile.last_name}` || '',
      username: userInfo.user.username || '',
      avatar: userInfo.user.avatar || '',
      alias: '',
      location: userProfile.location || '',
      bio: userProfile.bio || '',
      youtube: '',
      facebook: '',
      instagram: userProfile.instaUrl || '',
      twitter: userProfile.instaUrl || '',
      tiktok: '',
      sampler: '',
      orgs: '', //to be an array
      gatherings: '', //to be an array
    },
  });

  const submitHandler = data => {
    // e.preventDefault ();
    if (!profileLoaded) {
      dispatch (showSnackbar ('Please try again'));
    } else if (profileLoaded) {
      const testObj = JSON.stringify ({
        id: userProfile.orgs.length + 1,
        name: `${data.orgs}`,
      });
      
      //on submit => stringify entry
      console.log ({
        ...data,
        orgs: [...mappedOrgs, JSON.parse (testObj)],
      });
      console.log (mappedOrgs);
      //how to get highest id in this array of objects??
    }

    // console.log ({...data, section: {id: section.id}, user: {id: 1}});
  };

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
        <CardHeader title={<Typography variant="h3">Orgs and Communities</Typography>} />
        <CardContent className={classes.formContent}>
          <OrgsList mappedOrgs={mappedOrgs} formContentStyles={classes.formContent}/>
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

import React from 'react';
// import PropTypes from 'prop-types';
import {
  Avatar,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider
} from '@material-ui/core';
import PageHeading from '../../components/PageHeading';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '-3rem'
  },
  mainCard: {
    paddingTop: '2rem',
    textAlign: 'center'
  },
  card: {
    marginBottom: '1rem'
  },
  divider: {
    background: 'black'
  },
  subheader: {
    marginTop: '1rem'
  },
  list: {
    '& > *': {
      margin: '1rem 0'
    }
  },
  avatar: {
    position: 'relative',
    top: '2rem',
    backgroundColor: theme.palette.primary.light,
    height: '4rem',
    margin: 'auto',
    width: '4rem',
    zIndex: '10'
  }
}));

// HEADING: Avatar + Username + short bio
// BODY: User's posts or their favorite posts by others, maybe links to their samplers

const MyProfileView = ({profile}) => {

  const classes = useStyles();
  return (
    <Grid className={classes.root} container item spacing={2} xs={12}>
      <Grid item xs={12}>
        <Avatar className={classes.avatar}>JD</Avatar>
        <Card className={classes.mainCard}>
          <CardHeader
            subheader={
              <Typography className={classes.subheader}>
                Some interesting stuff about me goes here
              </Typography>
            }
            title={<PageHeading title="John Doe" />}
          />
          <CardContent>
            <Typography variant="body1">MAIN CONTENT GOES HERE.</Typography>
            <Typography variant="body1">
              Maybe links to this user's feature tricking sampler, or their
              favorites?
            </Typography>
            <Typography variant="body1">
              Maybe this user's posts or their favorite posts by other people?
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4}>
        <Card className={classes.card}>
          <CardHeader
            title={<Typography variant="h4">Organizations</Typography>}
          />
          <Divider />
          <CardContent className={classes.list}>
            <Typography>Some organization</Typography>
            <Typography>Some organization</Typography>
            <Typography>Some organization</Typography>
            <Typography>Some organization</Typography>
            <Typography>Some organization</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            title={<Typography variant="h4">Other stuff</Typography>}
          />
          <Divider />
          <CardContent className={classes.list}>
            <Typography>Some other thing</Typography>
            <Typography>Some other thing</Typography>
            <Typography>Some other thing</Typography>
            <Typography>Some other thing</Typography>
            <Typography>Some other thing</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid container item sm={8}>
        <Card className={classes.card}>
          <CardHeader title={<Typography variant="h4">Some post</Typography>} />
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              velit odit sunt provident maiores, perferendis aliquam minus fugit
              similique tempora animi consequatur ducimus repellendus architecto
              molestias corporis officia consectetur! Odit! Nemo dolore
              architecto eum eos fugiat ea aperiam impedit incidunt quae, harum
              officiis praesentium neque exercitationem, earum quibusdam, iusto
              adipisci eaque! Earum fugit nostrum officiis? Sequi doloribus enim
              placeat velit.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardHeader title={<Typography variant="h4">Some post</Typography>} />
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              velit odit sunt provident maiores, perferendis aliquam minus fugit
              similique tempora animi consequatur ducimus repellendus architecto
              molestias corporis officia consectetur! Odit! Nemo dolore
              architecto eum eos fugiat ea aperiam impedit incidunt quae, harum
              officiis praesentium neque exercitationem, earum quibusdam, iusto
              adipisci eaque! Earum fugit nostrum officiis? Sequi doloribus enim
              placeat velit.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardHeader title={<Typography variant="h4">Some post</Typography>} />
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              velit odit sunt provident maiores, perferendis aliquam minus fugit
              similique tempora animi consequatur ducimus repellendus architecto
              molestias corporis officia consectetur! Odit! Nemo dolore
              architecto eum eos fugiat ea aperiam impedit incidunt quae, harum
              officiis praesentium neque exercitationem, earum quibusdam, iusto
              adipisci eaque! Earum fugit nostrum officiis? Sequi doloribus enim
              placeat velit.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

// MyProfileView.propTypes = {};

export default MyProfileView;

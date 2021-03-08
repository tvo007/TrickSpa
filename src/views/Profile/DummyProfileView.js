//to be deleted

import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent
} from '@material-ui/core';
import PageHeading from '../../components/PageHeading';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  divider: {
    background: 'black'
  },
  card: {
    paddingTop: '2rem'
  },
  subheader: {
    marginTop: '1rem'
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

const DummyProfileView = props => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <Grid item xs={12}>
        <Avatar className={classes.avatar}>JD</Avatar>
        <Card className={classes.card}>
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
    </Grid>
  );
};

DummyProfileView.propTypes = {};

export default DummyProfileView;

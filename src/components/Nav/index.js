//to be deleted

import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
  root: {},
}));

//get url and parse through via react routers getLocation/gethistory/useParams

const Nav = props => {
  const {forumSlug, postSlug} = useParams ();
  return (
    <Grid container>
      <Button size="small"><Typography>forums</Typography></Button>
      <Typography variant="h2">/</Typography>
      <Button><Typography>{forumSlug}</Typography></Button>
      <Typography variant="h2">/</Typography>
      <Button><Typography>{postSlug}</Typography></Button>
    </Grid>
  );
};

Nav.propTypes = {};

export default Nav;

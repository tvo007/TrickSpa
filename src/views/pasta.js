//to be deleted

import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles (theme => ({
  divider: {
    background: 'black',
  },
}));

const OriginalPost = props => {
  const classes = useStyles ();
  return <div />;
};

OriginalPost.propTypes = {};

export default OriginalPost;

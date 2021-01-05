import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';

function PageHeading({ title }) {
  return <Typography variant="h1">{title}</Typography>
}

export default PageHeading;

PageHeading.propTypes = {
  title: PropTypes.string.isRequired
}

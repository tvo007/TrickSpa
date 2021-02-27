import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {IconButton, Grid, Typography, Button, Hidden} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const MobileIcons = ({openMini, handleMiniClose, handleMiniOpen}) => {
  return (
    <Grid item>
      <Hidden smDown>
        {!openMini
          ? <IconButton
              aria-label="open drawer"
              onClick={handleMiniOpen}
              color="default"
            >
              <MenuIcon />
            </IconButton>
          : <IconButton
              aria-label="open drawer"
              onClick={handleMiniClose}
              color="default"
            >
              <MenuOpenIcon />
            </IconButton>}
      </Hidden>
    </Grid>
  );
};

MobileIcons.propTypes = {};

export default MobileIcons;

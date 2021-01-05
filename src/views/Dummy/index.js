import React from 'react';
import PropTypes from 'prop-types';
import PageHeading from '../../components/PageHeading';
import {Typography, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles (theme => ({
  root: {
    padding: theme.spacing (4),
  },
}));

function Dummy (props) {
  const classes = useStyles ();

  return (
    <div className={classes.root}>    
      <PageHeading title="Dummy Page" />
      <Grid
        container
        justify="center"
      >
        <Grid
          item
          sm={6}
        >
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, pariatur libero fuga cupiditate optio ipsa quaerat inventore nesciunt nemo tempore ducimus mollitia perferendis illo hic voluptate suscipit voluptatem sed facere.Mollitia consequatur quam accusantium dignissimos, rem qui ipsam vitae ipsum dolores! Reiciendis magni itaque accusamus ad porro pariatur nemo, consequuntur voluptatem vero et. Dolores vero nemo recusandae, reiciendis fugit libero.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

Dummy.propTypes = {};

export default Dummy;

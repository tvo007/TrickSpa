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
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import {makeStyles, useTheme} from '@material-ui/styles';

const useStyles = makeStyles (theme => ({
  profile: {
    width: '15vw',
  },
  subheader: {
    backgroundColor: theme.palette.primary.light,
    height: theme.spacing (1),
  },
}));

const OriginalPost = ({title, body, author, post}) => {
  const classes = useStyles ();
  return (
    <Card>
      <CardHeader
        className={classes.subheader}
        subheader={
          <Grid container direction="row" alignItems="center">

            <InsertDriveFileIcon fontSize="small" />

            <Typography variant="subtitle2">
              by {author} @ time
            </Typography>
          </Grid>
        }
      />
      <Grid container>
        <Grid item xs={9}>

          <CardContent>
            <Typography>{body}</Typography>
          </CardContent>
        </Grid>
        {/* <Divider orientation="vertical" flexItem />
        <Grid item xs={1}>
          <CardContent className={classes.profile}>
            <Typography noWrap={true}>PROFILE CONTENT</Typography>
            <Typography noWrap={true}>SHOULD HIDE WHEN MINIMAL</Typography>
          </CardContent>
        </Grid> */}

      </Grid>

    </Card>
  );
};

OriginalPost.propTypes = {};

export default OriginalPost;

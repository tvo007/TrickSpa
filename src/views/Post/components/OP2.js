import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Avatar,
} from '@material-ui/core';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import {makeStyles, useTheme} from '@material-ui/styles';

const useStyles = makeStyles (theme => ({
  profile: {
    width: '15vw',
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
  },
  subheader: {
    color: theme.palette.text.subtitle,
  },
}));

const OP2 = ({title, body, author, post}) => {
  const classes = useStyles ();
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            R
          </Avatar>
        }
        title={<Typography>{title}</Typography>}
        subheader={
          <Grid container direction="row" alignItems="center">
            <Typography variant="body2" className={classes.subheader}>
              Posted by {author} @ time
            </Typography>
          </Grid>
        }
      />
      <Divider />
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

OP2.propTypes = {};

export default OP2;

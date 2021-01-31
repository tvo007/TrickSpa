import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
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
  card: {
    maxWidth: '50rem',
    margin: 'auto',
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
  },
  subheader: {
    color: theme.palette.text.subtitle,
  },
  title: {
    fontSize: '1.5rem',
    lineHeight: '1.5',
    fontWeight: '700'
  }
}));

const OP3 = ({title, body, author, post, loading}) => {
  const classes = useStyles ();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          loading 
            ? 
            <Skeleton
              circle
              height={40}
              width={40}
            /> 
            :
            <Avatar className={classes.avatar}>
              R
            </Avatar>
        }
        subheader={
          loading 
            ? <Skeleton width={100} />
            :
            <Typography
              className={classes.subheader}
              variant="body2"
            >
              Posted by {author} @ time
            </Typography>
        }
        title={
          loading
            ? <Skeleton width={400} />
            :
            <Typography
              className={classes.title}
              component="h2"
            >{title}</Typography>
        }
      />
      <CardContent>
        {
          loading
            ? <Skeleton count={3} />
            :
            <Typography variant="body1">{body}</Typography>
        }
      </CardContent>
    </Card>
  );
};

OP3.propTypes = {};

export default OP3;

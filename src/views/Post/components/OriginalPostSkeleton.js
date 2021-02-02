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
    fontWeight: '700',
  },
}));

const OriginalPostSkeleton = props => {
  const classes = useStyles ();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Skeleton circle height={40} width={40} />}
        subheader={<Skeleton width={100} />}
        title={<Skeleton width={400} />}
      />
      <CardContent>
        {<Skeleton />}
      </CardContent>
    </Card>
  );
};

OriginalPostSkeleton.propTypes = {};

export default OriginalPostSkeleton;

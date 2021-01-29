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
  card: {
    maxWidth: '50rem',
    margin: 'auto'
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
  },
  subheader: {
    color: theme.palette.text.subtitle,
  },
  title: {
    fontWeight: '700'
  }
}));

const OP2 = ({title, body, author, post}) => {
  const classes = useStyles ();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            R
          </Avatar>
        }
        subheader={
          <Typography
            className={classes.subheader}
            variant="body2"
          >
            Posted by {author} @ time
          </Typography>
        }
        title={<Typography className={classes.title}>{title}</Typography>}
      />
      <CardContent>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum, fugit molestiae eaque quo, consectetur rem beatae aperiam inventore magni aut minima voluptas sed ex vel consequatur unde? Veniam, quisquam?Debitis pariatur at aspernatur porro quaerat sequi quisquam quasi aliquid, ullam distinctio saepe, amet tempore aperiam eius minima. Voluptas possimus mollitia amet recusandae suscipit asperiores quia labore vero officiis saepe.
        </Typography>
      </CardContent>
    </Card>
  );
};

OP2.propTypes = {};

export default OP2;

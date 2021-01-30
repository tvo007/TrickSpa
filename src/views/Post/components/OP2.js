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
        subheader={
          <Grid
            alignItems="center"
            container
            direction="row"
          >
            <Typography
              className={classes.subheader}
              variant="body2"
            >
              Posted by {author} @ time
            </Typography>
          </Grid>
        }
        title={<Typography>{title}</Typography>}
      />
      <Divider />
      <Grid container>
        <Grid
          item
          xs={9}
        >

          <CardContent>
            <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam sed consequuntur perspiciatis, nihil voluptatibus quidem earum, commodi quis ipsum excepturi assumenda quos aspernatur omnis eligendi sint quam reprehenderit. Fugit, odit.Necessitatibus explicabo minima, dolorem veritatis culpa omnis deserunt cumque quia! Iusto praesentium accusantium obcaecati similique temporibus nihil itaque! Qui iste laudantium veritatis alias architecto exercitationem aut accusantium sequi pariatur fuga?</Typography>
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

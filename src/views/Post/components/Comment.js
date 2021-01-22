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
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles (theme => ({
  profile: {
    width: '15vw',
  },
}));

const Comment = ({body, author, postTitle}) => {
  const classes = useStyles ();
  return (
    <Card>
      <Grid container>

        <Grid item xs={9}>

          <CardHeader
            title={
              <Grid>
                <Grid>
                  <Typography variant="h4">Re: {postTitle}</Typography>
                </Grid>
              </Grid>
            }
            subheader={
              <Grid container direction="row">
                <Typography>
                  <InsertDriveFileIcon fontSize="small" />
                </Typography>

                <Typography>
                  by {author}
                </Typography>
              </Grid>
            }
          />
          <Divider />
          <CardContent>
            <Typography>{body}</Typography>
          </CardContent>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={1}>
          <CardContent className={classes.profile}>
            <Typography noWrap={true}>PROFILE CONTENT</Typography>
            <Typography noWrap={true}>SHOULD HIDE WHEN MINIMAL</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

Comment.propTypes = {};

export default Comment;

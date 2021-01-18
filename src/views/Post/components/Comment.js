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
}));

const Comment = ({body, title, author}) => {
  return (
    <Card>
      <CardHeader
        title={<Typography variant="h4">Re: {title}</Typography>}
        subheader={
          <Grid container direction="row">
            <Typography>
              <InsertDriveFileIcon fontSize="small" />
            </Typography>

            <Typography>
              by TODO: get author data from comments // create comments reducers by post
            </Typography>
          </Grid>
        }
      />

      <CardContent>
        <Typography>{body}</Typography>
      </CardContent>
    </Card>
  );
};

Comment.propTypes = {};

export default Comment;

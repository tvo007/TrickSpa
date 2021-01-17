import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PageHeading from '../../components/PageHeading';
import OriginalPost from './components/OriginalPost';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';

const PostView = ({post, isPostLoading, error}) => {

  const author = post.user ? post.user.username : null


  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <PageHeading title={post.section ? post.section.name : null} />
      </Grid>
      {isPostLoading
        ? <Typography>Loading</Typography>
        : error
            ? <Typography>Error!</Typography>
            : <Fragment>

                <Grid item xs={12}>
                  {/**this is where we can start creating a specific component to decorate the OP  */}
                  <OriginalPost title={post.title} body={post.body} author={author} post={post}/>

                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardHeader
                      title={
                        <Typography variant="h4">COMMENT TITLE HERE</Typography>
                      }
                    />
                    <CardContent>
                      <Typography>COMMENT BODY HERE</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Fragment>}

    </Grid>
  );
};

PostView.propTypes = {};

export default PostView;

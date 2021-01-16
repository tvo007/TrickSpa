import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PageHeading from '../../components/PageHeading';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';

const PostView = ({post, isPostLoading, error}) => {
  return (
    <Grid container spacing={4}>
      {isPostLoading
        ? <Typography>Loading</Typography>
        : error
            ? <Typography>Error!</Typography>
            : <Fragment>
                <Grid item xs={12}>
                  <PageHeading
                    title={post.section ? post.section.name : null}
                  />
                </Grid>
                <Grid item xs={12}>
                  {/**this is where we can start creating a specific component to decorate the OP  */}
                  <Card>
                    <CardHeader
                      title={<Typography variant="h4">{post.title}</Typography>}
                    />
                    <CardContent>
                      <Typography>{post.body}</Typography>
                    </CardContent>
                  </Card>

                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardHeader
                      title={<Typography variant="h4">COMMENT TITLE HERE</Typography>}
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

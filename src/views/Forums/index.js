import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import PageHeading from '../../components/PageHeading';
import {makeStyles} from '@material-ui/styles';
import {getPosts} from '../../actions/postActions';
// import {getComments} from '../../actions/comment';
import {useDispatch, useSelector} from 'react-redux';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles (theme => ({
  root: {
    padding: theme.spacing (4),
  },
}));

const Forums = props => {
  const dispatch = useDispatch ();

  useEffect (
    () => {
      dispatch (getPosts ());
    },
    [dispatch]
  );

  const {posts, loading: isPostLoading, error} = useSelector (
    state => state.posts
  );

  //   const {comments, isCommentLoading} = useSelector (state => state.comment);

  //   const showComments = comments.map (comment => {

  //     return (
  //       <Grid>
  //         <Typography>{comment.body}</Typography>
  //       </Grid>
  //     );

  const classes = useStyles ();

  return (
    <div className={classes.root}>

      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          xs={12}
        >
          <PageHeading title="Forums" />
        </Grid>
        {isPostLoading
          ? <Grid><Typography>LOADING</Typography></Grid>
          : error
            ? <Grid><Typography>ERROR</Typography> </Grid>
            : <Grid
              container
              item
              spacing={4}
              >
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <Card>
                  <CardHeader
                    title={<Typography variant="h2">What's New</Typography>}
                  />
                  <CardContent>
                    <Grid>
                      <Typography>
                            Extra! Extra! Read all about it!
                      </Typography>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <Card>
                  <CardHeader
                    title={
                      <Typography variant="h2">Tricking General</Typography>
                    }
                  />
                  <CardContent>
                    <Grid>
                      <Typography>
                            Generic tricking talk goes here.
                      </Typography>
                    </Grid>

                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <Card>
                  <CardHeader
                    title={
                      <Typography variant="h2">
                            Tricking Technique
                      </Typography>
                    }
                  />
                  <CardContent>
                    <Grid>
                      <Typography>Teach me how to backflip.</Typography>
                    </Grid>

                  </CardContent>
                </Card>
              </Grid>

              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <Card>
                  <CardHeader
                    title={<Typography variant="h2">Publicus</Typography>}
                  />
                  <CardContent>
                    <Grid>
                      <Typography>
                            A Place to kick back and talk about anything
                      </Typography>
                    </Grid>

                  </CardContent>
                </Card>

              </Grid>

            </Grid>}

      </Grid>
    </div>
  );
};

Forums.propTypes = {};

export default Forums;

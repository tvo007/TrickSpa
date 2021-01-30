//to be deleted

import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {createPost} from '../../actions/postActions';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';
import PageHeading from '../../components/PageHeading';
import Nav from '../../components/Nav';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles (theme => ({
  buttonText: {
    color: theme.palette.primary.contrastText,
  },
}));

const CreatePostView = ({
  section,
  isSectionLoading,
  errorSection,
  createLoading,
  errorCreate,
  successCreate,
  history,
  forumSlug,
}) => {
  const [title, setTitle] = useState ('');
  const [body, setBody] = useState ('');

  const dispatch = useDispatch ();

  const submitHandler = e => {
    e.preventDefault ();
    dispatch (
      createPost ({title, body, section: {id: section.id}, user: {id: 1}})
    );
    setTitle ('');
    setBody ('');
  };

  const classes = useStyles ();
  return (
    <Grid container spacing={4}>
      {isSectionLoading
        ? <Grid><Typography>LOADING</Typography></Grid>
        : errorSection
            ? <Grid><Typography>ERROR</Typography> </Grid>
            : <Fragment>
                <Grid item xs={12}>
                  <PageHeading title={section.name} />
                  <Nav text="Create a Post" />
                </Grid>
                {/*  */}

                <Grid item xs={12}>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <form onSubmit={submitHandler}>
                        <Grid container direction="column" spacing={2}>
                          <Grid item>
                            <TextField
                              fullWidth
                              name="title"
                              id="title"
                              value={title || ''}
                              variant="outlined"
                              placeholder="Give your post a title"
                              onChange={e => setTitle (e.target.value)}
                              required
                            />
                          </Grid>
                          <Grid item>
                            <TextField
                              fullWidth
                              name="body"
                              id="body"
                              value={body || ''}
                              variant="outlined"
                              placeholder="Give your post a body"
                              onChange={e => setBody (e.target.value)}
                              required
                            />
                          </Grid>

                          <Grid item container justify="flex-start" spacing={1}>

                            <Grid item>
                              <Button
                                color="primary"
                                variant="contained"
                                size="small"
                                type="submit"
                              >
                                <Typography
                                  variant="button"
                                  className={classes.buttonText}
                                >
                                  Create Post <CreateIcon fontSize="small" />
                                </Typography>
                              </Button>
                            </Grid>
                            <Grid item>
                              <Button
                                color="primary"
                                variant="contained"
                                size="small"
                                onClick={e =>
                                  history.push (`/forums/${forumSlug}`)}
                              >
                                <Typography
                                  variant="button"
                                  className={classes.buttonText}
                                >
                                  Go Back <CloseIcon fontSize="small" />
                                </Typography>
                              </Button>
                            </Grid>
                          </Grid>

                        </Grid>

                      </form>

                    </Grid>

                  </Grid>
                </Grid>

              </Fragment>}
    </Grid>
  );
};

CreatePostView.propTypes = {};

export default CreatePostView;

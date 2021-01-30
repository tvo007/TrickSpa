import React, {useState, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import PostItem from './components/PostItem';
import CreatePost from './components/CreatePost';
import PageHeading from '../../components/PageHeading';
import Nav from '../../components/Nav';
import ShowCreatePostButton from './components/ShowCreatePostButton';
import {Grid, Typography, Button, TextField} from '@material-ui/core';
import {createPost} from '../../actions/postActions';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

const ForumSectionView = ({
  section,
  isSectionLoading,
  error,
  history,
  forumSlug,
  posts,
  isPostsLoading,
  postsError,
  newPosts,
  successCreate,
  errorCreate,
  createLoading,
}) => {
  const [title, setTitle] = useState ('');
  const [body, setBody] = useState ('');
  // const [title, setTitle] = useState('')

  const dispatch = useDispatch ();
  // const handleShowCreatePost = () => {
  //   setIsPosting (true);
  // };

  // const handleBack = () => {
  //   setIsPosting (false);
  // };

  const submitHandler = e => {
    e.preventDefault ();
    dispatch (
      createPost ({title, body, section: {id: section.id}, user: {id: 1}})
    );
    setTitle ('');
    setBody ('');
    // setIsPosting (false);
  };

  return (
    <Grid container spacing={4}>
      {isSectionLoading
        ? <Grid><Typography>LOADING</Typography></Grid>
        : error
            ? <Grid><Typography>ERROR</Typography> </Grid>
            : <Fragment>
                <Grid item xs={12}>
                  <PageHeading title={section.name} />
                  <Nav />
                </Grid>
                {/*  */}

                <Grid container item spacing={4}>
                  <ShowCreatePostButton
                    text="Create Post"
                    onClick={e =>
                      history.push (`/forums/${forumSlug}/createPost`)}
                  />
                  {section.posts
                    ? section.posts.map (post => (
                        <PostItem
                          key={post.id}
                          name={post.title}
                          description={post.body}
                          onClick={e =>
                            history.push (
                              `/forums/${section.slug}/${post.slug}`
                            )}
                        />
                      ))
                    : null}

                </Grid>
              </Fragment>}

    </Grid>
  );
};

ForumSectionView.propTypes = {};

export default ForumSectionView;

/**
 * TODO:
 * slugify the posts and then add this:
 * onClick={e => history.push(`/forums/${section.slug}/${post.slug}`)}
 */

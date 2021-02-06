import React, {useState, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import PostItem from './components/PostItem';
import PostItemSkeleton from './components/PostItemSkeleton';
import PageHeading from '../../components/PageHeading';
import Nav from '../../components/Nav';
import ShowCreatePostButton from './components/ShowCreatePostButton';
import Pagination from '../../components/Pagination';
import usePagination from '../../common/usePagination';
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

  // Pagination variables
  const [ currentPosts, numberOfPostsPerPage, paginate ] = usePagination(section.posts, 10);

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
    <Grid
      container
      spacing={4}
    >
      <Grid
        container
        item
        xs={8}
      >
        <PageHeading
          title={
            forumSlug === 'whats-new'
              ? 'What\'s New'
              : forumSlug
                .replace (/-/g, ' ')
                .replace (/(^\w{1})|(\s{1}\w{1})/g, match =>
                  match.toUpperCase ()
                )
          }
        />
        <Nav />

      </Grid>

      <Grid
        alignItems="center"
        container
        item
        xs={4}
      >
        <ShowCreatePostButton
          onClick={e => history.push (`/forums/${forumSlug}/createPost`)}
          text="Create Post"
        />
      </Grid>
      {error
        ? <Grid><Typography>ERROR</Typography> </Grid>
        : <Fragment>

          {/*  */}

          <Grid
            container
            item
            spacing={4}
          >

            {currentPosts
              ? currentPosts.map (post => (
                <PostItem
                  description={post.body}
                  isSectionLoading={isSectionLoading}
                  key={post.id}
                  name={post.title}
                  onClick={e =>
                    history.push (`/forums/${section.slug}/${post.slug}`)}
                />
              ))
              : <Fragment>
                <PostItemSkeleton />
                <PostItemSkeleton />
                <PostItemSkeleton />
                <PostItemSkeleton />
                <PostItemSkeleton />
                <PostItemSkeleton />
                <PostItemSkeleton />
                <PostItemSkeleton />
              </Fragment>}
            {
              currentPosts && 
              (
                <Grid
                  container
                  item
                  justify="center"
                  xs={12}
                >
                  <Pagination 
                    numberPerPage={numberOfPostsPerPage} 
                    paginate={paginate}
                    totalNumberOfItems={section.posts.length}
                  />
                </Grid>
              )
            }
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

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PostItem from './components/PostItem';
import PageHeading from '../../components/PageHeading';
import Nav from '../../components/Nav'
import {Grid, Typography} from '@material-ui/core';

const ForumSectionView = ({section, isSectionLoading, error, history}) => {
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
                <Grid container item spacing={4}>
                  {section.posts
                    ? section.posts.map (post => (
                        <PostItem
                          key={post.id}
                          name={post.title}
                          description={post.body}
                          onClick={e => history.push(`/forums/${section.slug}/${post.slug}`)}
                        />
                      ))
                    : <Typography>Loading</Typography>}

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

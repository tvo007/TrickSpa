import React, {Fragment, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getSection} from '../../actions/sectionActions';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import PageHeading from '../../components/PageHeading';
import PostItem from '../ForumSection/components/PostItem'
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

//how to match parsed sectionName with section id??
//user enters url ...forums/whatsnew
//atm renders error due to id undefined
//

const ForumSection = props => {
  const {slug} = useParams ();
  const dispatch = useDispatch ();
  //useEffect to get single section data here

  useEffect (
    () => {
      dispatch (getSection (slug));
    },
    [dispatch, slug]
  );

  const {section, loading: isSectionLoading, error} = useSelector (
    state => state.section
  );

  const classes = useStyles ();
  return (
    <div className={classes.root}>

      <Grid container spacing={4}>
        {isSectionLoading
          ? <Grid><Typography>LOADING</Typography></Grid>
          : error
              ? <Grid><Typography>ERROR</Typography> </Grid>
              : <Fragment>
                  <Grid item xs={12}>
                    <PageHeading title={section.name} />
                  </Grid>
                  <Grid container item spacing={4}>
                    <PostItem name="POST 1" description="POST DESC"/>
                    <PostItem name="POST 1" description="POST DESC"/>
                    <PostItem name="POST 1" description="POST DESC"/>
                    <PostItem name="POST 1" description="POST DESC"/>
                    <PostItem name="POST 1" description="POST DESC"/>
                  </Grid>
                </Fragment>}

      </Grid>
    </div>
  );
};

ForumSection.propTypes = {};

export default ForumSection;

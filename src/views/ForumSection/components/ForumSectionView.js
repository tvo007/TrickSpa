import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import PostItem from './PostItem'
import PageHeading from '../../../components/PageHeading'
import {
    Grid,
    Typography,
  } from '@material-ui/core';

const ForumSectionView = ({section, isSectionLoading, error}) => {
    return (
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
    )
}

ForumSectionView.propTypes = {

}

export default ForumSectionView


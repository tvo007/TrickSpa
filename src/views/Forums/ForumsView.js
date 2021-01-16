import React from 'react';
import PropTypes from 'prop-types';
import PageHeading from '../../components/PageHeading';
import SectionItem from './components/SectionItem';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';

const ForumsView = ({sections, isSectionLoading, error, history}) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <PageHeading title="Forums" />
      </Grid>
      {isSectionLoading
        ? <Grid><Typography>LOADING</Typography></Grid>
        : error
            ? <Grid><Typography>ERROR</Typography> </Grid>
            : <Grid container item spacing={4}>
                {sections.map (section => (
                  <SectionItem
                    key={section.id}
                    name={section.name}
                    description={section.description}
                    onClick={e => history.push (`/forums/${section.slug}`)}
                  />
                ))}

              </Grid>}
    </Grid>
  );
};

ForumsView.propTypes = {};

export default ForumsView;

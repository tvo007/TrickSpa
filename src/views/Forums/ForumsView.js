import React from 'react';
import PropTypes from 'prop-types';
import PageHeading from '../../components/PageHeading';
import Nav from '../../components/Nav';
import SectionItem from './components/SectionItem';
//experiemental
import {useSelector} from 'react-redux';
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
      {error
        ? <Grid><Typography>ERROR</Typography> </Grid>
        : <Grid
          container
          item
          spacing={4}
        >
          {sections.map (section => (
            <SectionItem
              description={section.description}
              isSectionLoading={isSectionLoading}
              key={section.id}
              name={section.name}
              onClick={e => history.push (`/forums/${section.slug}`)}
            />
          ))}

        </Grid>}
    </Grid>
  );
};

ForumsView.propTypes = {};

export default ForumsView;

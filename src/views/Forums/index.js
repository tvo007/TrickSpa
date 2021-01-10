import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import PageHeading from '../../components/PageHeading';
import {useHistory} from 'react-router-dom';
import {makeStyles} from '@material-ui/styles';
// import {getPosts} from '../../actions/postActions';
import {getSections} from '../../actions/sectionActions';
// import {getComments} from '../../actions/comment';
import {useDispatch, useSelector} from 'react-redux';
import SectionItem from './components/SectionItem';
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

  const history = useHistory ();

  useEffect (
    () => {
      dispatch (getSections ());
    },
    [dispatch]
  );

  const {sections, loading: isSectionLoading, error} = useSelector (
    state => state.sections
  );

  //section names have spaces and single quotes
  //parsing function to cleanly format routing names

  const classes = useStyles ();

  return (
    <div className={classes.root}>

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
    </div>
  );
};

Forums.propTypes = {};

export default Forums;

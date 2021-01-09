import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';

const SectionItem = ({name, description}) => {
  return (
    <Grid item lg={12} md={12} xl={12} xs={12}>
      <Card>
        <CardHeader title={<Typography variant="h2">{name}</Typography>} />
        <CardContent>
          <Grid>
            <Typography>
              {description}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

SectionItem.propTypes = {};

export default SectionItem;

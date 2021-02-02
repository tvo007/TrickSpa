import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Link,
  Button,
} from '@material-ui/core';

const PostItem = ({name, description, onClick, isSectionLoading}) => {
  // For testing skeleton-loader
  const [ loading, setLoading ] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Grid
      item
      lg={12}
      md={12}
      xl={12}
      xs={12}
    >
      <Card>
        <CardHeader
          title={
            loading
              ? <Skeleton width={200} />
              : 
              <Link
                component="button"
                onClick={onClick}
              >
                <Typography variant="h2">{name}</Typography>
              </Link>
          }
        />
        <CardContent>
          <Grid>
            {
              loading
                ? <Skeleton count={1} />
                :
                <Typography>
                  {description}
                </Typography>
            }
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

PostItem.propTypes = {};

export default PostItem;

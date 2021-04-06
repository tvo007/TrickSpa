import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const OrgsList = ({mappedOrgs, formContentStyles}) => {

  const deleteHandler = (e) => {
    e.preventDefault();
    alert('DELETE TEST SUCCESS')
  }

  const updateHandler = (e) => {
    e.preventDefault();
    alert('UPDATE TEST SUCCESS')

  }

  const displayOrgs = mappedOrgs.map (org => {
    return (
      <ListItem key={org.id}>
        <ListItemText primary={<Typography>{org.name}</Typography>} />
        <ListItemSecondaryAction>
        <IconButton onClick={deleteHandler}>
            <DeleteIcon />
        </IconButton>
        <IconButton onClick={updateHandler}>
            <EditIcon />
        </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return (
    <div className={formContentStyles}>
      <List>
        {displayOrgs}
      </List>

    </div>
  );
};

OrgsList.propTypes = {};

export default OrgsList;

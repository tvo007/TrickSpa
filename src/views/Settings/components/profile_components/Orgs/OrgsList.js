import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
  IconButton,
  TextField,
  Button,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';

const schema = yup.object ().shape ({
  org: yup.string (),
});

const OrgsList = ({mappedOrgs, formContentStyles, setMappedOrgs}) => {
  const deleteHandler = orgId => {
    setMappedOrgs (mappedOrgs.filter (org => org.id !== orgId));
  };

  const updateHandler = obj => {
    console.log (mappedOrgs);
  };

  const {register, handleSubmit, errors, reset} = useForm ({
    resolver: yupResolver (schema),
    defaultValues: {
      org: '',
    },
  });

  const displayOrgs = mappedOrgs.map (org => {
    return (
      <ListItem key={org.id}>
        <ListItemText primary={<Typography>{org.name}</Typography>} />
        <ListItemSecondaryAction>
          <IconButton onClick={() => deleteHandler (org.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => updateHandler ()}>
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  const submitHandler = data => {
    const maxId = Math.max.apply (null, mappedOrgs.map (org => org.id));
    const newOrgs = [...mappedOrgs, {id: maxId + 1, name: data.org}];
    setMappedOrgs (newOrgs);
    // console.log(mappedOrgs)
    reset ({org: ''});
  };

  return (
    <div>
      <Grid className={formContentStyles}>
        <List>
          {displayOrgs}
        </List>
      </Grid>

      <TextField
        error={errors.org ? true : false}
        fullWidth
        helperText={errors.org ? errors.org.message : null}
        id="org"
        inputRef={register}
        label="Org"
        name="org"
        placeholder="Let trickers know your org/team affiliations"
      />
      <IconButton onClick={handleSubmit (submitHandler)}>
        <AddBoxIcon />
      </IconButton>

    </div>
  );
};

OrgsList.propTypes = {};

export default OrgsList;

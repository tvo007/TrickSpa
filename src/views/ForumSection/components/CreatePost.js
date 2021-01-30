import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  TextField,
  Button,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles (theme => ({
  buttonText: {
    color: theme.palette.primary.contrastText,
  },
}));

const CreatePost = ({title, setTitle, body, setBody, submitHandler, handleBack}) => {
  const classes = useStyles ();

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <form onSubmit={submitHandler}>

          <TextField
            fullWidth
            name="title"
            id="title"
            value={title || ''}
            variant="outlined"
            placeholder="Give your post a title"
            onChange={e => setTitle (e.target.value)}
            required
          />
          <TextField
            fullWidth
            name="body"
            id="body"
            value={body || ''}
            variant="outlined"
            placeholder="Give your post a body"
            onChange={e => setBody (e.target.value)}
            required
          />
          <Grid item container justify="flex-start" spacing={1}>
        
        <Grid item>
        <Button color="primary" variant="contained" size="small" type="submit">
          <Typography variant="button" className={classes.buttonText}>
            Create Post <CreateIcon fontSize="small" />
          </Typography>
        </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            size="small"
            type="submit"
            onClick={handleBack}
          >
            <Typography variant="button" className={classes.buttonText}>
              Go Back <CloseIcon fontSize="small" />
            </Typography>
          </Button>
        </Grid>
      </Grid>
        </form>

      </Grid>
      

    </Grid>
  );
};

CreatePost.propTypes = {};

export default CreatePost;

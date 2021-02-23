import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '2rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    width: '90%',
    minHeight: '5rem',
    margin: '0 auto',
    '& > *': {
      width: '80%',
      margin: '1rem auto'
    }
  },
  submit: {
    border: 'none',
    background: 'none',
    outline: 'none',
    color: 'white',
    width: '100%',
    height: '100%',
    cursor: 'pointer'
  }
});

export default useStyles;

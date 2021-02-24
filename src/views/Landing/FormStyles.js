import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '25rem',
    '& > div': {
      height: '100%'
    }
  },
  leftSide: {
    backgroundColor: theme.palette.primary.main,
    '& *': {
      color: theme.palette.WHITE,
      margin: '1rem'
    },
    '& h2': {
      fontFamily: 'Permanent Marker'
    }
  },
  rightSide: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    width: '100%',
    minHeight: '5rem',
    margin: '0 auto',
    '& > *': {
      width: '100%',
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
}));

export default useStyles;

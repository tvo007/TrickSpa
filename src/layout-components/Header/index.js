import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const useStyles = makeStyles (theme => ({
  root: {
    boxShadow: 'none',
  },
  appBar: {
    backgroundColor: 'white',
    width: `calc(100% - 73px)`,
    // 'calc(100% - 8px)',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create (['width', 'margin'], {
      easing: theme.transitions.easing.slow,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth => drawerWidth,
    width: drawerWidth => `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create (['width', 'margin'], {
      easing: theme.transitions.easing.slow,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarMobile: {
    backgroundColor: 'white',
    width: '100%',
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginRight: 30,

    //
  },
  menuButton: {
    marginRight: 30,
  },
  hide: {
    display: 'none',
  },
}));

const Header = props => {
  const {
    className,
    onSidebarOpen,
    drawerWidth,
    openMini,
    handleMiniOpen,
    handleMiniClose,
    isDesktop,
    ...rest
  } = props;

  const classes = useStyles (drawerWidth, openMini, isDesktop);

  // const [notifications] = useState([]);

  return (
    <div className={classes.root} {...rest}>
      <AppBar
        position="fixed"
        className={clsx (classes.appBar, {
          [classes.appBarShift]: openMini && isDesktop,
          [classes.appBarMobile]: !isDesktop,

        })}
      >

        <Toolbar>
          <div className={classes.flexGrow} />
          <Grid />
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Hidden smDown>
                {!openMini
                  ? <IconButton
                      aria-label="open drawer"
                      onClick={handleMiniOpen}
                      color="default"
                    >
                      <MenuIcon />
                    </IconButton>
                  : <IconButton
                  aria-label="open drawer"
                  onClick={handleMiniClose}
                  color="default"
                >
                  <MenuOpenIcon />
                </IconButton>}
              </Hidden>
            </Grid>

            {!isDesktop
              ? <Grid item container direction="row" justify="flex-end">
                  <Grid item>
                    <Hidden lgUp>
                      <IconButton onClick={onSidebarOpen} color="default">
                        <MenuIcon />
                      </IconButton>
                    </Hidden>
                  </Grid>

                  <Grid item>
                    <IconButton
                      className={classes.signOutButton}
                      color="default"
                    >
                      <InputIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              : <Grid item>
                  <IconButton className={classes.signOutButton} color="default">
                    <InputIcon />
                  </IconButton>
                </Grid>}

          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
};

export default Header;

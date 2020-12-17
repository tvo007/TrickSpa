import React, {Fragment} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import { Drawer, Typography, Grid} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
// import PeopleIcon from '@material-ui/icons/People';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MessageIcon from '@material-ui/icons/Message';
// import ImageIcon from '@material-ui/icons/Image';
// import AccountBoxIcon from '@material-ui/icons/AccountBox';
// import SettingsIcon from '@material-ui/icons/Settings';
// import LockOpenIcon from '@material-ui/icons/LockOpen';
import IconButton from '@material-ui/core/IconButton';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FlashOnIcon from '@material-ui/icons/FlashOn'; //temp icon
import FlightLandIcon from '@material-ui/icons/FlightLand';

import SidebarNav from './components/SidebarNav';
import SidebarProfile from './components/SidebarProfile'

// const drawerWidth = 240;

const useStyles = makeStyles (theme => ({
  drawer: {
    width: drawerWidth => drawerWidth,
    [theme.breakpoints.up ('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  drawerOpen: {
    width: drawerWidth => drawerWidth,
    transition: theme.transitions.create ('width', {
      easing: theme.transitions.easing.slow,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create ('width', {
      easing: theme.transitions.easing.slow,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing (7) + 1,
    [theme.breakpoints.up ('sm')]: {
      width: theme.spacing (9) + 1,
    },
  },
  root: {
    backgroundColor: '#fb6373',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    // padding: theme.spacing (2),
  },
  divider: {
    margin: theme.spacing (4, 0),
  },
  nav: {
    paddingTop: '30px'
  },
  profile: {
    
  },
  iconButton: {
    color: 'white',
    padding: theme.spacing (3),
    cursor: 'pointer'
  },
  sideTitle: {
    color:'white',
    transition: theme.transitions.create ('width', {
      easing: theme.transitions.easing.slow,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
}));

const Sidebar = ({
  onClose,
  open,
  variant,
  className,
  drawerWidth,
  openMini,
  isDesktop,
  handleMiniClose,
}) => {
  const classes = useStyles (drawerWidth);
  // const theme = useTheme ();

  const iconStyling = openMini ? '30px' : null

  const pages = [
    {
      title: 'Dashboard',
      href: '/Dashboard',
      icon: <DashboardIcon />,
    },
    {
      title: 'Landing',
      href: '/Landing',
      icon: <FlightLandIcon />,
    },
    {
      title: 'Forums',
      href: '/Forums',
      icon: <MessageIcon />,
    },
  ];

  return (
    <Fragment>
      <Drawer
        anchor="left"
        classes={{
          paper: clsx ({
            [classes.drawerOpen]: openMini && isDesktop,
            [classes.drawerClose]: !openMini && isDesktop,
          }),
        }}
        className={clsx (classes.drawer, {
          [classes.drawerOpen]: openMini && isDesktop,
          [classes.drawerClose]: !openMini && isDesktop,
        })}
        color="primary"
        onClose={onClose}
        open={open}
        variant={variant}
      >
        <div className={clsx (classes.root, className)}>
          <Grid
            alignItems="center"
            className={classes.iconButton}
            container
            direction="row"
            justify="space-around"
            wrap="nowrap"
          >
            <Grid
              item
              style={{paddingRight: iconStyling}}
            >
              <FlashOnIcon />
            </Grid>
            <Grid
              item
              zeroMinWidth
            >
              {openMini ? <Typography
                className={classes.sideTitle}
                noWrap
                variant="h4"
              >
            CONNECTRIX
              </Typography> : null}
            </Grid>
          
          </Grid>
          
          {/* <Typography color="textSecondary" className={classes.profile}>
            Profile Pic
          </Typography> */}
          <SidebarProfile
            className={classes.profile}
            openMini={openMini}
          />
          
          <SidebarNav
            className={classes.nav}
            openMini={openMini}
            pages={pages}
          />
        </div>


      </Drawer>
    </Fragment>
  );
};

Sidebar.propTypes = {};

export default Sidebar;

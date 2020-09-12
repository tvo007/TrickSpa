import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/styles';
import {useMediaQuery} from '@material-ui/core';
import {Sidebar, Header, Footer} from '../../layout-components';

const useStyles = makeStyles (theme => ({
  root: {
    paddingTop: 56,
    paddingLeft: openMini => (openMini ? 300 : 100),
    height: '10%',
    [theme.breakpoints.up ('sm')]: {
      paddingTop: 64,
    },
  },
  shiftContent: {
    // paddingLeft: openMini => openMini ? 300 : 100,
    paddingLeft: 240,
  },
  content: {
    width: '100%',
    height: '100%',
    transition: theme.transitions.create ('width', 'height', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

const Main = props => {
  const {children} = props;

  const drawerWidth = 240;
  //theme spacing via 8px scaling factor as per mui api docs, theme.spacing(7) + 1 = 7+8px + 1 px

  const [openMini, setOpenMini] = useState (false);

  const handleMiniOpen = () => {
    setOpenMini (true);
  };

  const handleMiniClose = () => {
    setOpenMini (false);
  };

  const classes = useStyles (openMini, drawerWidth);
  const theme = useTheme ();

  const isDesktop = useMediaQuery (theme.breakpoints.up ('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState (false);

  const handleSidebarOpen = () => {
    setOpenMini (true);
    setOpenSidebar (true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar (false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx ({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      <Header
        onSidebarOpen={handleSidebarOpen}
        drawerWidth={drawerWidth}
        openMini={openMini}
        handleMiniOpen={handleMiniOpen}
        handleMiniClose={handleMiniClose}
        isDesktop = {isDesktop}
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
        drawerWidth={drawerWidth}
        openMini={openMini}
        handleMiniClose={handleMiniClose}
        isDesktop = {isDesktop}
      />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;

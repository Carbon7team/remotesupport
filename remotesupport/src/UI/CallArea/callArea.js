import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'right',
    width: '100%',
  },
}));

const callArea = ({isLogged}) => {
  const classes = useStyles();

  return (
    <>
    {!isLogged && (
      <div id='message-not-logged-wrapper'>
      <h2>SOCOMEC SUPPORT</h2>
      <p>Effettua il login</p>
      <p>All'avvio il tuo stato sarà impostato come <span>Disponibile</span></p>
      </div>
    )}
    { isLogged && (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>)
    }
    </>
  );
};

export default callArea;

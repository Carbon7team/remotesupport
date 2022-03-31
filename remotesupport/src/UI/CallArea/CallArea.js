import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
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

const CallArea = (props) => {

  const classes = useStyles();
  
  const isLogged = props.isLogged;

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
      <h2>Video Chat</h2>
      <VideoPlayer/>
    </div>)
    }
    </>
  );
};

export default CallArea;

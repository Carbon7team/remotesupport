import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import Sidebar from './Sidebar';
import { ContextCall } from '../ContextCall';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {

  const { callAccepted, callEnded, myVideo, userVideo, stream } = useContext(ContextCall);

  const classes = useStyles();

  return (

    <Grid container className={classes.gridContainer}>

      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}

      {stream && (<Sidebar/>)}
      
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      
    </Grid>

  );
};

export default VideoPlayer;

import React, { useState, useContext } from 'react';
import { Button, Grid, Typography, Container, Paper } from '@material-ui/core';
import { Phone, PhoneDisabled, VolumeUp, VolumeOff, Videocam, VideocamOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { ContextCall } from '../ContextCall';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid black',
  },
}));

const Sidebar = () => {

  const { callAccepted, callEnded, toggleAudio, toggleVideo, leaveCall } = useContext(ContextCall);
  
  const [volume, setVolume] = useState(true);
  const [video, setVideo] = useState(true);
  
  const classes = useStyles();

  return (
    <Container className={classes.container}>

          <Grid container className={classes.gridContainer}>

            <Grid item xs={12} md={6} className={classes.padding}>

              { volume  && <Button className="volume-button" variant="contained" color="secondary" startIcon={<VolumeUp fontSize="large"/>} fullWidth onClick={() => {setVolume(false); toggleAudio;}}/>}
              { !volume && <Button className="volume-button" variant="contained" color="secondary" startIcon={<VolumeOff fontSize="large"/>} fullWidth onClick={() => {setVolume(true); toggleAudio;}}/>}
              { video   && <Button className="video-button" variant="contained" color="secondary" startIcon={<Videocam fontSize="large"/>} fullWidth onClick={() => {setVideo(false); toggleVideo;}}/>}
              { !video  && <Button className="video-button" variant="contained" color="secondary" startIcon={<VideocamOff fontSize="large"/>} fullWidth onClick={() => {setVideo(true); toggleVideo;}}/>}
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className={classes.margin}>
                  Hang Up
                </Button>
              ) : ( <></> )
              //   <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className={classes.margin}>
              //     Call
              //   </Button>
              }

            </Grid>

          </Grid>

    </Container>
  );
};

export default Sidebar;

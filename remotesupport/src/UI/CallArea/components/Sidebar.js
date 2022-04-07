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

  const {callAccepted, callEnded, toggleAudio, toggleVideo, leaveCall} = useContext(ContextCall);

  const [volume, setVolume] = useState(true);
  const [video, setVideo] = useState(true);
  // const [callAccepted, setCallAccepted] = useState(true);
  // const [callEnded, setCallEnded] = useState(false);
  
  const classes = useStyles();

  return (
              <div>
              { volume ?
                <Button className="volume-button" variant="contained"  startIcon={<VolumeUp fontSize="large"/>}  onClick={() => {setVolume(false); toggleAudio();}}/>
                  :
                <Button className="volume-button" variant="contained"  startIcon={<VolumeOff fontSize="large"/>}  onClick={() => {setVolume(true); toggleAudio();}}/>
              }
              { video ?
                <Button className="video-button" variant="contained"  startIcon={<Videocam fontSize="large"/>}  onClick={() => {setVideo(false); toggleVideo();}}/>
                  :
                <Button className="video-button" variant="contained"  startIcon={<VideocamOff fontSize="large"/>}  onClick={() => {setVideo(true); toggleVideo();}}/>
              }
              {callAccepted && !callEnded ? 
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />}  onClick={() => { leaveCall() }} className={classes.margin}>
                  Hang Up
                </Button> 
                  : 
                <> </>}
            </div>
  );
};

export default Sidebar;

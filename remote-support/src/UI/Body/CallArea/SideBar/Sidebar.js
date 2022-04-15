import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { PhoneDisabled, VolumeUp, VolumeOff, Videocam, VideocamOff } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import { useInstance } from '../../../../Utilities/useInstance';
import SideBarVM from './SidebarVM';
import { useStore } from '../../../../Utilities/contextProvider';

const Sidebar = observer(() => {

  const [audio, setAudio] = useState(true);
  const [video, setVideo] = useState(true);

  const {
    callAccepted,
    callEnded,
    toggleAudio,
    toggleVideo,
    leaveCall
  } = useInstance(new SideBarVM(useStore()));

  return (
      <div id="wrapper-sidebar">
        { audio ?
          <Button className="volume-button" variant="contained"  startIcon={<VolumeUp fontSize="large"/>}  onClick={() => {setAudio(false); toggleAudio();}}/>
            :
          <Button className="volume-button" variant="contained"  startIcon={<VolumeOff fontSize="large"/>}  onClick={() => {setAudio(true); toggleAudio();}}/>
        }
        { video ?
          <Button className="video-button" variant="contained"  startIcon={<Videocam fontSize="large"/>}  onClick={() => {setVideo(false); toggleVideo();}}/>
            :
          <Button className="video-button" variant="contained"  startIcon={<VideocamOff fontSize="large"/>}  onClick={() => {setVideo(true); toggleVideo();}}/>
        }
        {callAccepted && !callEnded ? 
          <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />}  onClick={() => { leaveCall(); }} className={classes.margin}>
            Hang Up
          </Button> 
            : 
          <> </>}
    </div>
  );
})

export default Sidebar;

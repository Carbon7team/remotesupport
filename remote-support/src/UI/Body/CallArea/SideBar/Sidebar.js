import React, { useState } from "react";
import { Button } from "@material-ui/core";
import {
  PhoneDisabled,
  VolumeUp,
  VolumeOff,
  Videocam,
  VideocamOff,
} from "@material-ui/icons";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../Utilities/contextProvider";

const Sidebar = observer((props) => {
  const rootstore = useStore();

  const { stream, call, connectionDataChannel, peerTech } = props.vars;

  const { setStream } = props.setters;

  const { callAccepted, callEnded } = rootstore.stateUIStore;

  const [audio, setAudio] = useState(true);
  const [video, setVideo] = useState(true);

  const toggleAudio = () => {
    stream
      .getAudioTracks()
      .forEach((track) => (track.enabled = !track.enabled));
  };

  const toggleVideo = () => {
    stream
      .getVideoTracks()
      .forEach((track) => (track.enabled = !track.enabled));
  };

  const leaveCall = () => {
    rootstore.stateUIStore.setCallEnded(true);
    rootstore.stateUIStore.setCallAccepted(false);
    setStream(undefined);
    rootstore.stateUIStore.setJsonData(undefined);
    call.close();
    connectionDataChannel.close();
    peerTech.destroy();
  };

  return (
    <div id="wrapper-sidebar">
      {audio ? (
        <Button
          className="audio-button"
          variant="contained"
          startIcon={<VolumeUp fontSize="large" />}
          onClick={() => {
            setAudio(false);
            toggleAudio();
          }}
        />
      ) : (
        <Button
          className="audio-button"
          variant="contained"
          startIcon={<VolumeOff fontSize="large" />}
          onClick={() => {
            setAudio(true);
            toggleAudio();
          }}
        />
      )}
      {video ? (
        <Button
          className="video-button"
          variant="contained"
          startIcon={<Videocam fontSize="large" />}
          onClick={() => {
            setVideo(false);
            toggleVideo();
          }}
        />
      ) : (
        <Button
          className="video-button"
          variant="contained"
          startIcon={<VideocamOff fontSize="large" />}
          onClick={() => {
            setVideo(true);
            toggleVideo();
          }}
        />
      )}
      {callAccepted && !callEnded && (
        <Button
          variant="contained"
          color="secondary"
          startIcon={<PhoneDisabled fontSize="large" />}
          onClick={() => {
            leaveCall();
          }}
        >
          Hang Up
        </Button>
      )}
    </div>
  );
});

export default Sidebar;

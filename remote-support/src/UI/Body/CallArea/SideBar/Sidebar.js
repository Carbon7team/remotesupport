import React, { useState } from "react";
import { Button } from "@material-ui/core";
import {
  PhoneDisabled,
  VolumeUp,
  VolumeOff,
  // Videocam,
  // VideocamOff,
} from "@material-ui/icons";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../Utilities/contextProvider";

const Sidebar = observer((props) => {
  const rootstore = useStore();

  const { leaveCall } = props;

  const { streamTech } = rootstore.stateUIStore;

  const [audio, setAudio] = useState(true);

  const toggleAudio = () => {
    streamTech
      .getAudioTracks()
      .forEach((track) => (track.enabled = !track.enabled));
  };

  return (
    <div id="wrapper-sidebar">
      {streamTech &&
        (audio ? (
          <Button
            id="button-audio-on"
            variant="contained"
            startIcon={<VolumeUp fontSize="large" />}
            onClick={() => {
              setAudio(false);
              toggleAudio();
            }}
          />
        ) : (
          <Button
            id="button-audio-off"
            variant="contained"
            startIcon={<VolumeOff fontSize="large" />}
            onClick={() => {
              setAudio(true);
              toggleAudio();
            }}
          />
        ))}

      <Button
        id="button-close"
        variant="contained"
        color="secondary"
        startIcon={<PhoneDisabled fontSize="large" />}
        onClick={() => {
          leaveCall();
        }}
      >
        Hang Up
      </Button>
    </div>
  );
});

export default Sidebar;

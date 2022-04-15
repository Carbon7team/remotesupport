import React from 'react';
import { useStore } from '../../../Utilities/contextProvider';
import { useInstance } from '../../../Utilities/useInstance';
import CallAreaVM from './CallAreaVM';
import Sidebar from './SideBar/Sidebar';
import VideoPlayer from './VideoPlayer/VideoPlayer';

const CallArea = observer((props) => {
  const {
    techVideo,
    userVideo
  } = props

  const {} = useInstance(new CallAreaVM(useStore()));

  return (
    <div id="wrapper-callarea">

      <h2>Video Chat</h2>

          <VideoPlayer videoMedia={techVideo}/>
          <Sidebar/>
          <VideoPlayer videoMedia={userVideo}/>

    </div>
  );
})

export default CallArea;


const VideoPlayer = (props) => {

  const videoMedia = props;

  return <video playsInline muted ref={videoMedia} autoPlay/>
}

export default VideoPlayer;

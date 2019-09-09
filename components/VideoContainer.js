import YouTube from 'react-youtube';

const VideoContainer = ({videoId, title, subtitle, text1,  text2,  text3}) => (
  <div className="vueltos__video-container">
    <div className="d-flex justify-content-center align-items-baseline mb-4">
      <div>
        <h2 className="mt-4 mb-0">{title}</h2>
        <p className="text-right"><b>{subtitle}</b></p>
      </div>
      <img src="/static/images/twitter.png" />
    </div>
    <YouTube
      videoId={videoId}
      opts={{
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      }}
    />
    <div className="mt-4 d-flex justify-content-around text-center">
      <div className="col">
        <img src="/static/images/twitter.png" className="mb-2" style={{ width: '80px', height: '80px' }} />
        <p>{text1}</p>
      </div>
      <div className="col">
        <img src="/static/images/twitter.png" className="mb-2" style={{ width: '80px', height: '80px' }} />
        <p>{text2}</p>
      </div>
      <div className="col">
        <img src="/static/images/twitter.png" className="mb-2" style={{ width: '80px', height: '80px' }} />
        <p>{text3}</p>
      </div>
    </div>
  </div>
)
export default VideoContainer;
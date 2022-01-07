import React, {useContext} from 'react';
// import ReactVideoPlayer from "react-video-js-player"
import {CallContext} from "../../Contexts/CallContext";

 const VideoPlayer = () => {

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(CallContext);

    // const [videoControl, setVideoControl] = useState(true); 
    // const [audioControl, setAudioControl] = useState(true); 

    return (
        <div>
            {stream && (
                <div className="container">
                    <p className='center'>{name || "Me"}</p>
                    <div className="video-container">
                        <video ref={myVideo} autoPlay playsInline muted controls></video>
                        {/* <button className={`btn ${videoControl ? 'green': 'red darken-1'}`} onClick={() => setVideoControl(!videoControl)} ><i className="material-icons">video</i></button>
                        <button className={`btn ${audioControl ? 'green': 'red darken-1'}`} onClick={() => setAudioControl(!audioControl)}><i className="material-icons">audio</i></button> */}
                    </div>
                </div>
            )}
              {callAccepted && !callEnded && (
                <div className="container">
                    <p className="center">{call.name}</p>
                    <div className="video-container">
                        <video ref={userVideo} autoPlay playsInline muted></video>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VideoPlayer;
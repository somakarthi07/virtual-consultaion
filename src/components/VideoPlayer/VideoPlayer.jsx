import React, {useContext} from 'react';
import {CallContext} from "../../Contexts/CallContext";

 const VideoPlayer = () => {

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(CallContext);

    console.log(name, call, userVideo, myVideo)

    return (
        <div>
            {stream && (
                <div className="container">
                    <p className='center'>{name || "Me"}</p>
                    <div className="video-container">
                        <video ref={myVideo} autoPlay playsInline muted></video>
                        {/* <iframe width="853" height="480" ref={myVideo} frameBorder="0" allowFullScreen></iframe> */}
                    </div>
                </div>
            )}
              {callAccepted && !callEnded && (
                <div className="container">
                    <p className="center">{call.name}</p>
                    <div className="video-container">
                        <video ref={userVideo} autoPlay playsInline muted></video>
                        {/* <iframe width="853" height="480" ref={myVideo} frameBorder="0" allowFullScreen></iframe> */}
                    </div>
                </div>
            )}
        </div>
    )
}

export default VideoPlayer;
import React from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CallAlert from '../../components/CallAlert/CallAlert';

 const VideoCall = () => {
    return (
        <div>
            <VideoPlayer />
            <CallAlert />
        </div>
    )
}

export default VideoCall;

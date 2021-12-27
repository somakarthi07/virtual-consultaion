import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CallAlert from '../../components/CallAlert/CallAlert';

 const VideoCall = () => {
    return (
        <div>
            <Navbar />
            <VideoPlayer />
            <CallAlert />
        </div>
    )
}

export default VideoCall;

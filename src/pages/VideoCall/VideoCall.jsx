import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CallAlert from '../../components/CallAlert/CallAlert';

 const VideoCall = () => {
    const history = useHistory();
    return (
        <div>
            <Link onClick={(e) => history.goBack()}>go back</Link><br></br>
            <Link to="/users">go to find doctors</Link>
            <VideoPlayer />
            <CallAlert />
        </div>
    )
}

export default VideoCall;

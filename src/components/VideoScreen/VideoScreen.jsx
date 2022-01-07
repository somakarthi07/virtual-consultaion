import React from 'react'
import VideoSideBar from "../VideoSideBar/VideoSideBar";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CallAlert from "../CallAlert/CallAlert";



export default function VideoScreen() {
    return (
        <div>
            <VideoPlayer/>
            <VideoSideBar>
                <CallAlert />
            </VideoSideBar>
        </div>
    )
}

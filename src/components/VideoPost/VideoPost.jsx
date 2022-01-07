import React, {useEffect}  from 'react'
import M from "materialize-css"
import ReactPlayer from "react-player";

export default function VideoPost({video}) {

    useEffect(() => {
        M.AutoInit();
        const parallax = document.querySelectorAll(".parallax")
        M.Parallax.init(parallax);
    }, []);

    const pinky = ["#ffc0db", "#ffc0d6", "#ffc0d0", "#ffc0cb", "#ffc0c6", "#ffc0c1", "#ffc5c0"]

    return (
        <div className="col s12 m12 l12" style={{background: pinky[Math.round(Math.random(0, pinky.length))]}}>
           {video && <div style={{height: "50vh", width: "80vw", marginTop: "5vh", marginLeft: "12vw", marginBottom: "2vh"}}><ReactPlayer url={video.url} /></div>}
        </div>
    )
}

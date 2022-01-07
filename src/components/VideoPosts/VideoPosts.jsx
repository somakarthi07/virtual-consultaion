import React from 'react';
import VideoPost from "../VideoPost/VideoPost";
import useFetch from "../../hooks/useFetch";
import paint from "../../assets/giphy.webp"

export default function Users() {
    const url = `/api/v1/videos`;
    const {data, error, loading} = useFetch(url);
    console.log(data);
    return (
        <div className="container">
            {<div className="row">
                    {data && data.map(video => (
                        <VideoPost key={video._id} video={video} />
                    ))}
            </div>}
            {loading && <div style={{height: "80vh", width: "100vw", marginTop: "20vh", marginLeft: "15vw"}}>
                            <img src={paint} alt="" />
                            <h1 style={{marginLeft: "6vw"}}>Please wait ...</h1>
                        </div>}
            {error && <h3 style={{color: "red"}}>{error}</h3>}
        </div>
    )
}

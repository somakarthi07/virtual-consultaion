import React from 'react';
import Post from "../Post/Post";
import useFetch from "../../hooks/useFetch";
import paint from "../../assets/giphy.webp"

export default function Posts() {
    const url = `/api/v1/posts`;
    const {data, error, loading} = useFetch(url);

    // const grez = ["#787878", "#7b7b7b", "#7d7d7d", "#808080", "#838383", "#858585", "#888888"]

    return (
        <div className="container">
            {<div className="row">
                    {data && data.map(post => (
                        <Post key={post._id} post={post} />
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

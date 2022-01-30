import React from 'react';
import Post from "../Post/Post";
import useFetch from "../../hooks/useFetch";
import paint from "../../assets/giphy.webp";
import SERVER_URL from "../../ServerURL";

export default function Posts() {
    const url = `${SERVER_URL}/api/v1/posts`;
    const {data, error, loading} = useFetch(url);

    return (
        <div className="container">
            {<div className="row">
                    {data && data.map(post => (
                        <Post key={post._id} post={post} />
                    ))}
            </div>}
            {loading && <div style={{height: "80vh", marginTop: "20vh", marginLeft: "15vw"}}>
                            <img src={paint} alt="" />
                            <h1 style={{marginLeft: "6vw"}}>Please wait ...</h1>
                        </div>}
            {error && <h3 style={{color: "red"}}>{error}</h3>}
        </div>
    )
}

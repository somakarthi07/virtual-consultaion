import React, {useState} from 'react'
import User from "../User/User"
import useFetch from "../../hooks/useFetch"
import VideoCall from "../../pages/VideoCall/VideoCall";

export default function Users() {
    const url = "http://localhost:4000/api/v1/users";
    const {data, error, loading} = useFetch(url);
    const [calling, setCalling] = useState(false);
    return (
        <div className="container">
            {!calling && <div className="row">
                    {data && data.users.map(user => (
                        <User key={user._id} user={user} setCalling={setCalling} calling={calling} />
                    ))}
            </div>}
            {loading && <h2>Loading ....</h2>}
            {error && <h3 style={{color: "red"}}>{error}</h3>}
            {calling && <VideoCall />}
        </div>
    )
}

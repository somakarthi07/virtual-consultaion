import React from 'react';
import User from "../User/User";
import useFetch from "../../hooks/useFetch";
import paint from "../../assets/giphy.webp";
import SERVER_URL from "../../ServerURL";

export default function Users() {
    const url = `${SERVER_URL}/api/v1/doctors`;
    const {data, error, loading} = useFetch(url);

    return (
        <div className="container">
            {<div className="row">
                    {data && data.users.map(user => (
                        <User key={user._id} user={user} />
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

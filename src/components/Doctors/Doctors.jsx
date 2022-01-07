import React from 'react';
import Doctor from "../Doctor/Doctor";
import useFetch from "../../hooks/useFetch";
import paint from "../../assets/giphy.webp"


export default function Doctors() {
    const url = `http://localhost:4000/api/v1/users`;
    const {data, error, loading} = useFetch(url);
    return (
        <div className="container">
            {<div className="row">
                    {data && data.users.map(user => (
                        <Doctor key={user._id} user={user} />
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

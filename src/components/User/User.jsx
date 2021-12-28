import React, {useState, useContext} from 'react'
import {CallContext} from "../../Contexts/CallContext"

export default function User({user, calling, setCalling}) {
    const [username, setUsername] = useState(user.username);
    const [userprofile, setUserProfile] = useState(user.userprofile);
    const [update, setUpdate] = useState(false);

    const {callAccepted, callUser, leaveCall} = useContext(CallContext);

    console.log(user);

    const updateUser = async (id) => {
        try {
            // const url = `http://localhost:4000/api/v1/update/${id}`;
            const url = `https://rocky-escarpment-94268.herokuapp.com/api/v1/update/${id}`;
            const config = {method: "PUT", headers: {"Content-Type":"application/json"}, body: JSON.stringify({username, userprofile})};
            const resp = await fetch(url, config);
            const message = await resp.json();
            if(message){
                window.location.replace("/users");
            }
        } catch (err) {
            console.log(err);
        }
    }

    // const deleteUser = async (id) => {
    //     try {
    //         const url = `http://localhost:4000/api/v1/deleteAccount/${id}`;
    //         const config = {method: "DELETE"};
    //         const resp = await fetch(url, config);
    //         const message = await resp.json();
    //         if(message){
    //             window.location.replace("/users");
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    return (
        <div className="col s12 m6 l6">
           {!update && user && <div className="card" height="50vh" width="50vw">
                            <div className="card-img">
                                <img src={user.userprofile} alt={`${user.username} profile`} className="responsive-img" />
                            </div>
                            <div className="card-content">
                                <span className="card-title">
                                    {user.username}
                                </span>
                                <h6>{user.email}</h6>
                                <small>Joined on {new Date(user.createdAt).toLocaleString()}</small>
                            </div>
                            <div className="card-action" style={{textAlign: "center"}}>
                                {/* <button className="btn yellow darken-3" style={{marginRight: "2rem"}} onClick={(e) => setUpdate(!update)}>Update</button>
                                <button className="btn red darken-2" onClick={(e) =>{e.preventDefault(); deleteUser(user._id)}}>Delete</button> */}
                                {!callAccepted && <button className="btn yellow darken-3" style={{marginRight: "2rem"}} onClick={() => {setCalling(!calling); callUser(user._id, user.username);}}>call</button>}
                                {callAccepted && <button className="btn red darken-2" onClick={leaveCall}>end call</button>}
                            </div>
                         </div>
            }
            {update && user && <form style={{textAlign: "center"}}>
                            <div className="input-field">
                                <input type="text" name="user-name" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <label htmlFor="user-name">New Username</label>
                            </div>
                            <div className="input-field">
                                <input type="text" name="user-profile" value={userprofile} onChange={(e) => setUserProfile(e.target.value)} />
                                <label htmlFor="user-profile">New Profile URL</label>
                            </div>
                            <button className="btn yellow darken-3" style={{marginRight: "2rem"}} onClick={(e) => setUpdate(!update)}>Cancel</button>
                            <button className="btn green darken-3" onClick={(e) => {e.preventDefault(); updateUser(user._id)}}>Update</button>
                        </form>
            }
        </div>
    )
}

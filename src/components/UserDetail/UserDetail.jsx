import React, {useContext, useEffect, useState} from 'react';
import {CallContext, socket} from "../../Contexts/CallContext";
import {UserContext} from "../../Contexts/User";
import M from "materialize-css";
import { useLocation } from 'react-router-dom';
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CallAlert from "../CallAlert/CallAlert";

// this page Shows the doctor detail page for the platform user

export default function UserDetail() {

    const location = useLocation();

    const user = location.state.user;

    const rootUser = useContext(UserContext);
    const myName = rootUser.user.username;

    const {me, callAccepted, callUser, leaveCall} = useContext(CallContext);
    const [userToCall, setUserToCall] = useState('');

    useEffect(() => {
        M.AutoInit();
        const parallax = document.querySelectorAll(".parallax")
        M.Parallax.init(parallax);
    }, [])

    useEffect(() => {
        console.log(me, rootUser.user.username, "intial updateeee");
        socket.emit("updateUsersList", rootUser.user.username); // update the root user
        socket.emit("findUserToCall", (user.username));  // find the socket id of user to call 
        socket.on("findUserToCall", (key) => setUserToCall(key));
        console.log(userToCall, myName);
    }, [me, rootUser.user.username, user.username, userToCall, myName])

    return (
        <div className="col s12 m6 l6">
           {user && <div className="container">
                        <div class="parallax-container">
                            <div class="parallax"><img src={user.userprofile} alt={user.username}/></div>
                        </div>
                        <div class="section white">
                            <div class="row container">
                                <h2 class="header">Dr. {user.username}, {user.degree}</h2>
                                <p class="grey-text text-darken-3 lighten-3">{user.email}</p>
                                {user.aboutMe && <p class="grey-text text-darken-3 lighten-3">{user.aboutMe}</p>}
                                <small>Joined on {new Date(user.createdAt).toLocaleString()}</small>
                            </div>
                            <div className="card horizontal">
                                <div className="card-stacked">
                                    <div className="card-action">
                                        {!callAccepted && <button className="btn pink lighten-2 waves-effect waves-light" onClick={() => {callUser(userToCall, myName);}}>call</button>}
                                        {callAccepted && <button className="btn red darken-2 waves-effect waves-light" onClick={leaveCall}>end call</button>}
                                    </div>
                                </div>
                            </div>
                            <VideoPlayer/>
                            <CallAlert />
                        </div>
                    </div>
            }
        </div>
    )
}

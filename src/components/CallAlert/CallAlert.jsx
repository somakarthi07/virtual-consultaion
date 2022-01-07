import React, {useContext} from 'react';
import {CallContext} from "../../Contexts/CallContext";

 const CallAlert = () => {

    const {callAccepted, call, answerCall} = useContext(CallContext);

    console.log(callAccepted, call);

    return (
        <div>
            {call.isReceivingCall && !callAccepted && (
                <div class="card">
                    <div class="card-content">
                        <h4>{call.name} is calling ....</h4>
                        <p>click on answer to talk to {call.name}.</p>
                    </div>
                    <div class="card-action">
                        <button class="waves-effect btn green darken-2" onClick={answerCall} >Answer</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CallAlert;
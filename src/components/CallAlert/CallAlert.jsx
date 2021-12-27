import React, {useContext, useEffect} from 'react';
import {CallContext} from "../../Contexts/CallContext";

 const CallAlert = () => {

    const {callAccepted, call, answerCall} = useContext(CallContext);

    console.log(callAccepted, call);

    // useEffect(() => {
    //     answerCall();
    // }, [])

    return (
        <div>
            {call.isReceivingCall && !callAccepted && (
                <div className="card">
                    <div className="card-header">
                        {call.name} is calling ....
                    </div>
                    <div className="card-action">
                        <button className="btn" onClick={answerCall}>Answer</button> 
                    </div>
                </div>
            )}
        </div>
    )
}

export default CallAlert;
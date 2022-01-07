import React, {useState, useContext} from 'react'
import {CallContext} from "../../Contexts/CallContext"
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function VideoSideBar({ children }) {

    const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(CallContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <div>
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <CopyToClipboard text={me}>
                    <button>
                        Copy Your ID
                    </button>
                </CopyToClipboard>

                <p>Make a call</p>
                <input value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                {callAccepted && !callEnded ? (
                    <button onClick={leaveCall} >
                    Hang Up
                    </button>
                ) : (
                    <button onClick={() => callUser(idToCall)}>
                    Call
                    </button>
                )}
            </div>
            {children}
        </div>
    )
}

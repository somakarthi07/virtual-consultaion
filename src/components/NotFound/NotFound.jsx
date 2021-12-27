import React from 'react'
import {useHistory} from "react-router-dom"

export default function NotFound() {
    const history = useHistory();
    return (
        <div className="container">
            <h1 className="center">Page Not Found</h1>
            <button onClick={(e) => history.goBack()}>Go back</button>
        </div>
    )
}

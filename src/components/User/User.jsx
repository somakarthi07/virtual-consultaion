import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';

export default function User({user}) {

    const [goToProfile, setGoToProfile] = useState(false)

    return (
        <div className="col s12 m6 l6">
           {user && <div className="card horizontal" style={{height: "50vh"}}>
                            <div className="card-img">
                                <img style={{height: "50vh", width: "50vw"}} src={user.userprofile} alt={`${user.username} profile`} className="responsive-img" />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <span className="card-title">
                                       Dr. {user.username} 
                                    </span>
                                    <p>{user.email}</p>
                                </div>
                                <div className="card-action" style={{textAlign: "center"}}>
                                    <button className='btn pink lighten-2 waves-effect waves-light' onClick={() => setGoToProfile(!goToProfile) }>view profile</button>
                                    {goToProfile && <Redirect to={
                                        {
                                            pathname: '/profile',
                                            state: {user}
                                        }} />}
                                </div>
                            </div>
                         </div>
            }
        </div>
    )
}

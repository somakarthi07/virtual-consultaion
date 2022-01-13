import React, {useContext, useEffect} from 'react';
import { UserContext } from '../../Contexts/User';
import M from "materialize-css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function PersonalProfilePage() {

    const {user} = useContext(UserContext);

    useEffect(() => {
        M.AutoInit();
        const parallax = document.querySelectorAll(".parallax")
        M.Parallax.init(parallax);
    }, [])

    return (
        <div>
            <Navbar />
            <div className="col s12 m6 l6">
            {user && !user.isDoctor && <div className="container">
                            <div class="parallax-container">
                                <div class="parallax"><img src={user.userprofile} alt={user.username}/></div>
                            </div>
                            <div class="section white">
                                <div class="row container">
                                    <h2 class="header">{user.username}</h2>
                                    <p class="grey-text text-darken-3 lighten-3">{user.email}</p>
                                    <small>Joined on {new Date(user.createdAt).toLocaleString()}</small>
                                </div>
                            </div>
                            <a href="https://peaceful-saha-588b95.netlify.app" style={{marginBottom: "5vh", marginLeft: "30vw"}} className='btn waves-effect pink lighten-1'> Take a mental health assessment</a>
                        </div>
                }
                {user && user.isDoctor && <div className="container">
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
                            </div>
                        </div>
                }
            </div>
            <Footer />
        </div>
    )
}

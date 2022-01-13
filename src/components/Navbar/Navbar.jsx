import React, {useEffect, useContext} from 'react'
import {Link, NavLink, useHistory} from "react-router-dom"
import M from "materialize-css"
import {UserContext} from "../../Contexts/User"
import heal from "../../assets/heal.png"

const Navbar = () => {
    const {user} = useContext(UserContext);
   
    const authToken = localStorage.getItem("jwt");
    const history = useHistory();

    useEffect(() => {
        M.AutoInit();
        const sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav);
    }, []);

    const logout = () => {
        localStorage.removeItem("jwt");
        history.push("/login");
    };

    return (
        <nav className="nav-wrapper transparent">
            <Link className="brand-logo black-text" to="/" ><img src={heal} className='responsive-img circle' style={{height: 28, marginLeft: 10, marginRight: 10}} alt="" />Heal</Link>
            <Link className="sidenav-trigger hide-on-med-and-up black-text" to="/" data-target="mobile-links" ><i className="material-icons">menu</i></Link>
            <ul className="hide-on-small-only right" style={{marginRight: 10}}>
                {!authToken && <li><NavLink exact to="/" className="black-text">Home</NavLink></li>}
                {!authToken && <li><NavLink exact to="/login" className="black-text">Login</NavLink></li>}
                {!authToken && <li><NavLink exact to="/register" className="black-text">Sign up</NavLink></li>}
                {authToken && user && <li><NavLink exact to="/posts" className="black-text">Posts</NavLink></li>}
                {authToken && user && !user.isDoctor && <li><NavLink exact to="/users" className="black-text">Find Doctors</NavLink></li>}
                {authToken && user && user.isDoctor && <li><NavLink exact to="/patients" className="black-text">Patients</NavLink></li>}
                {authToken && user && <li><NavLink exact to="/videos" className="black-text">Videos</NavLink></li>}
                {!authToken && <li><NavLink exact to="/about" className="black-text">About Us</NavLink></li>} 
                {!authToken && <li><NavLink exact to="/contact" className="black-text">Contact Us</NavLink></li>} 
                {authToken && user && <li><NavLink exact to="/myprofile" className="black-text">
                                                <img className='responsive-img circle' style={{height: 28, marginTop:20}} src={user.userprofile} alt={user.username}/>
                                        </NavLink></li>}
                {authToken && !user && <li><NavLink exact to="/#" className="black-text">Hello, {!user && <span>Guest</span>}</NavLink></li>}
                {authToken && <li><NavLink exact to="/login" onClick={logout} className="black-text">Logout</NavLink></li>}
            </ul>
            <ul className="sidenav" id="mobile-links">
                {!authToken && <li><NavLink exact to="/" className="black-text">Home</NavLink></li>}
                {!authToken && <li><NavLink exact to="/login" className="black-text">Login</NavLink></li>}
                {!authToken && <li><NavLink exact to="/register" className="black-text">Sign up</NavLink></li>}
                {authToken && user && <li><NavLink exact to="/posts" className="black-text">Posts</NavLink></li>}
                {authToken && user && !user.isDoctor && <li><NavLink exact to="/users" className="black-text">Find Doctors</NavLink></li>}
                {authToken && user && user.isDoctor && <li><NavLink exact to="/patients" className="black-text">Patients</NavLink></li>}
                {authToken && user && <li><NavLink exact to="/videos" className="black-text">Videos</NavLink></li>}
                {!authToken && <li><NavLink exact to="/about" className="black-text">About Us</NavLink></li>} 
                {!authToken && <li><NavLink exact to="/contact" className="black-text">Contact Us</NavLink></li>}
                {authToken && user && <li><NavLink exact to="/myprofile" className="black-text">
                                            <img className='responsive-img circle' style={{height: 28, marginTop:20}} src={user.userprofile} alt={user.username}/>
                                        </NavLink></li>}
                {authToken && !user && <li><NavLink exact to="/#" className="black-text">Hello, {!user && <span>Guest</span>}</NavLink></li>}
                {authToken && <li><NavLink exact to="/login" onClick={logout} className="black-text">Logout</NavLink></li>}
            </ul>
        </nav>
    )
}

export default Navbar;
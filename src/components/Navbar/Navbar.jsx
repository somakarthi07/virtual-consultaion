import React, {useEffect, useRef, useContext} from 'react'
import {Link, NavLink, useHistory} from "react-router-dom"
import M from "materialize-css"
import {UserContext} from "../../Contexts/User"

const Navbar = () => {
    const {user} = useContext(UserContext);
   
    const authToken = localStorage.getItem("jwt");
    const history = useHistory();

    const sidenav = useRef();
    M.Sidenav.init(sidenav);

    useEffect(() => {
        M.AutoInit();
    }, []);

    const logout = () => {
        localStorage.removeItem("jwt");
        history.push("/login");
    };

    return (
        <nav className="nav-wrapper green">
            <Link className="brand-logo center" to="/" >Heal Virtual</Link>
            <Link className="sidenav-trigger hide-on-med-and-up" to="/" data-target="mobile-links" ><i className="material-icons">menu</i></Link>
            <ul className="hide-on-small-only">
                <li><NavLink exact to="/">Home</NavLink></li>
                {!authToken && <li><NavLink exact to="/login">Login</NavLink></li>}
                {!authToken && <li><NavLink exact to="/register">Sign up</NavLink></li>}
                {authToken && <li><NavLink exact to="/users">Find Doctors</NavLink></li>}
                {!authToken && <li><NavLink exact to="/about">About Us</NavLink></li>} 
                {!authToken && <li><NavLink exact to="/contact">Contact Us</NavLink></li>} 
                {authToken && user && <li style={{position: "relative"}}><NavLink exact to="/users">
                                            <span>
                                                <img style={{position: "absolute", left: "6rem", marginTop: "1.2rem", height: "2rem", width: "2rem", borderRadius: "50%", backgroundSize: "cover", backgroundPosition: "center"}} src={`${user.userprofile}`} alt={user.username}/>
                                            </span>
                                            <span  style={{position: "absolute",left: "8.5rem"}}>{user.username.toUpperCase()}</span>
                                        </NavLink></li>}
                {authToken && !user && <li><NavLink exact to="/#">Hello, {!user && <span>Guest</span>}</NavLink></li>}
                {authToken && <li><NavLink exact to="/login" onClick={logout}>Logout</NavLink></li>}
            </ul>
            <ul className="sidenav" id="mobile-links" ref={sidenav}>
                <li><NavLink exact to="/">Home</NavLink></li>
                {!authToken && <li><NavLink exact to="/login">Login</NavLink></li>}
                {!authToken && <li><NavLink exact to="/register">Sign up</NavLink></li>}
                {authToken && <li><NavLink exact to="/users">Find Doctors</NavLink></li>}
                {!authToken && <li><NavLink exact to="/about">About Us</NavLink></li>} 
                {!authToken && <li><NavLink exact to="/contact">Contact Us</NavLink></li>} 
                {authToken && user && <li style={{position: "relative"}}><NavLink exact to="/users">
                                            <span>
                                                <img style={{position: "absolute", left: "6rem", marginTop: "1.2rem", height: "2rem", width: "2rem", borderRadius: "50%", backgroundSize: "cover", backgroundPosition: "center"}} src={`${user.userprofile}`} alt={user.username}/>
                                            </span>
                                            <span  style={{position: "absolute",left: "8.5rem"}}>{user.username.toUpperCase()}</span>
                                        </NavLink></li>}
                {authToken && !user && <li><NavLink exact to="/#">Hello, {!user && <span>Guest</span>}</NavLink></li>}
                {authToken && <li><NavLink exact to="/login" onClick={logout}>Logout</NavLink></li>}
            </ul>
        </nav>
    )
}

export default Navbar;
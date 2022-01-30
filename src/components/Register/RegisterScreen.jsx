import React, {useState} from 'react'
import {Link} from "react-router-dom"
import register from "../../assets/register.png";
import SERVER_URL from "../../ServerURL";

export default function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [userprofile, setUserprofile] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [isDoctor, setIsDoctor] = useState(false);
    const [error, setError] = useState();
    const [objError, setObjError] = useState({errors: {}});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${SERVER_URL}/api/v1/register`;
        if(password !== rePassword){
            setError("Passwords does not match.");
            setTimeout(() => {
                setError("");
            }, 3000);
        }else{
            try {
                const user = await fetch(url, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({username, email, userprofile, password, isDoctor})
                });
                const resp = await user.json();
                if(resp.errors){
                    setObjError(resp);
                    setTimeout(() => {
                        setObjError({errors: ""});
                    }, 3000);
                }else{
                    localStorage.setItem("jwt", resp);
                    window.location.replace("/posts");
                }
                
            } catch (err) {
                console.log(err);
                if(localStorage.getItem("jwt")){
                    localStorage.removeItem("jwt");
                }
                setError(err.message);
                setTimeout(() => {
                    setError("");
                }, 3000);
            }
        }
    }

    return (
        <div>
            <div className='parallax-container' style={{height: "85vh"}}>
                <div className="parallax"><img src={register} className='responsive-img' alt="" /></div>
                <div className="card opaque"  style={{marginTop: "5vh", marginBottom:"5vh", marginLeft: "20vw", marginRight: "20vw"}}>
                    <div className="card-content">
                        <span className="card-title" style={{textAlign: "center"}}>Sign Up</span>
                        <div className="input-field">
                            {objError.errors.username && <div style={{color: "red", paddingBottom: "2rem"}}>{objError.errors.username}</div>}
                            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
                            <label htmlFor="username">username</label>
                        </div>
                        <div className="input-field">
                            {objError.errors.email && <div style={{color: "red"}}>{objError.errors.email}</div>}
                            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">email</label>
                        </div>
                        <div className="input-field">
                            {objError.errors.userprofile && <div style={{color: "red"}}>{objError.errors.userprofile}</div>}
                            <input type="text" name="user-profile" onChange={(e) => setUserprofile(e.target.value)} />
                            <label htmlFor="user-profile">profile URL</label>
                        </div>
                        <div className="input-field">
                            {objError.errors.password && <div style={{color: "red"}}>{objError.errors.password}</div>}
                            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="password">password</label>
                        </div>
                        <div className="input-field">
                            <input type="password" name="re-password" onChange={(e) => setRePassword(e.target.value)} />
                            <label htmlFor="re-password">re-type password</label>
                        </div>
                        <p>
                            <label>
                                <input type="checkbox" value={isDoctor} onClick={(e) => setIsDoctor(!isDoctor)} />
                                <span>I am a Doctor</span>
                            </label>
                        </p>
                        <p style={{textAlign: "center", marginBottom: "2rem"}}>
                            already have an account? <Link to="/login">login here</Link>
                        </p>
                        <div  style={{textAlign: "center"}}>
                            <button className="btn waves-effect waves-light pink lighten-2" type="submit" onClick={handleSubmit}>Sign up</button>
                        </div>
                        <div style={{textAlign: "center", marginTop: "1rem"}}>
                            {error && <div>{error}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

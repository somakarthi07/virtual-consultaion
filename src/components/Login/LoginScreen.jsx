import React, {useState} from 'react'
import { Link} from 'react-router-dom';
import login from "../../assets/login.jpg";
import SERVER_URL from "../../ServerURL";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if(email.length < 1){
            setError("Please provide an email.");
            setLoading(false);
            setTimeout(() => {
                setError(null);
            }, 3000);
        }else if(email.length < 6){
            setError("email must be atleast 6 characters.");
            setLoading(false);
            setTimeout(() => {
                setError(null);
            }, 3000);
        }else if(password.length < 1){
            setError("Please provide a password.");
            setLoading(false);
            setTimeout(() => {
                setError(null);
            }, 3000);
        }else if(password.length < 6){
            setError("password must be atleast 6 characters.");
            setLoading(false);
            setTimeout(() => {
                setError(null);
            }, 3000);
        }else{
            const url = `${SERVER_URL}/api/v1/login`;
            console.log(url);
            try {
                const user = await fetch(url, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({email, password})
                });
                const resp = await user.json();
                if(resp.error){
                    setError(resp.error);
                    setLoading(false);
                    setTimeout(() => {
                        setError(null);
                    }, 3000);
                }else{
                    setLoading(false);
                    localStorage.setItem("jwt", resp);
                    window.location.replace("/posts");
                }      
            } catch (err) {
                console.log(err);
                if(localStorage.getItem("jwt")){
                    localStorage.removeItem("jwt");
                }
                setError("Cannot reach server. Please Try again later.");
                setLoading(false);
                setTimeout(() => {
                    setError(null);
                }, 3000);
            }
        }
    }

    return (
        <div style={{height: "85vh", width: "100vw"}}>
             <div class="parallax-container" style={{height: "85vh", width: "100vw"}}>
                <div class="parallax"><img src={login} alt='' /></div>
                <div className="card" style={{marginTop: "5rem", marginLeft: "25rem", marginRight: "25rem"}}>
                <div className="card-content">
                    <span className="card-title" style={{textAlign: "center"}}>Login</span>
                <div className="input-field">
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password">password</label>
                    </div>
                    <p style={{textAlign: "center", marginBottom: "2rem"}}>
                        new to this site? <Link to="/register">register here</Link>
                    </p>
                    <div style={{textAlign: "center"}}>
                        <button className="btn waves-effect waves-light pink lighten-2" type="submit" onClick={handleSubmit}>Login</button>
                    </div>
                    <div style={{textAlign: "center", marginTop: "1rem"}}>
                        {error && <div style={{ padding: "2rem"}}>{error}</div>}
                        {loading && <div>logging in ...</div>}
                    </div>
              </div>
            </div>
            </div>
        </div>
    )
}

import React, {useState} from 'react'
import { Link, useHistory} from 'react-router-dom';

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const history = useHistory();

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
            // const url = "http://localhost:4000/api/v1/login";
            const url = "https://rocky-escarpment-94268.herokuapp.com/api/v1/login";
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
                    history.push("/users");
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
        <div className="container">
            <div className="card" style={{marginTop: "10rem", marginLeft: "8rem", marginRight: "8rem"}}>
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
                        <button className="btn" type="submit" onClick={handleSubmit}>Login</button>
                    </div>
                    <div style={{textAlign: "center", marginTop: "1rem"}}>
                        {error && <div>{error}</div>}
                        {loading && <div>logging in ...</div>}
                    </div>
              </div>
            </div>
        </div>
    )
}

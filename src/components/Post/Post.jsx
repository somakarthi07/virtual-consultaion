import React, {useState, useEffect}  from 'react'
import M from "materialize-css"
import { Redirect } from 'react-router-dom';

export default function Post({post}) {

    const [readMore, setReadMore] = useState(false);

    useEffect(() => {
        M.AutoInit();
        const parallax = document.querySelectorAll(".parallax")
        M.Parallax.init(parallax);
    }, [])

    return (
        <div className="col s12 m6 l6"  style={{height: "74vh", marginTop: "2vh", marginBottom: "2vh"}}>
           {post && <div>
                        <div class="parallax-container" style={{height: "48vh"}}>
                            <div class="parallax"> <img style={{height: "48vh"}} src={post.image} alt={post.title}/></div>
                        </div>
                        <div className="card" style={{height: "28vh"}}>
                            <div className="card-content" >
                                <span className="card-title">
                                    {post.title}
                                </span>
                                <small >Posted by {post.author}</small>
                            </div>
                            <div className="card-action center">
                                <button className="btn pink lighten-2 waves-effect waves-light" onClick={(e) => setReadMore(!readMore)}>Read More ...</button>
                                {readMore && <Redirect to={{
                                    pathname: "/post",
                                    state: {post}
                                }} /> }
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

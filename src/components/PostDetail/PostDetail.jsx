import React, { useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import M from "materialize-css";

export default function PostDetail() {

    const location = useLocation();
    const post = location.state.post;

    useEffect(() => {
        M.AutoInit();
        const parallax = document.querySelectorAll(".parallax")
        M.Parallax.init(parallax);
    }, [])

    return (
        <div className="col s12 m6 l6">
           {post && <div className="container">
                        <div class="parallax-container">
                            <div class="parallax"><img src={post.image} alt={post.title}/></div>
                        </div>
                        <div class="section white" style={{marginLeft: ".7vw"}}>
                            <div class="row container">
                                <h2 class="header">{post.title}</h2>
                                <small>By {post.author}</small>
                                <p class="grey-text text-darken-3 lighten-3">{post.content}</p>
                                <small>Posted on {new Date(post.createdAt).toLocaleString()}</small>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

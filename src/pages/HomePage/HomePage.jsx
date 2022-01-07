import React, { useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"
import M from "materialize-css"
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";

export default function HomePage() {
    
    useEffect(() => {
        M.AutoInit();
        const sliders = document.querySelectorAll('.slider');
        M.Slider.init(sliders);
    }, [])

    return (
        <div>
            <Navbar />
            <div className="slider" style={{height: "100%", width: "100%", background: "lightpink"}}>
                <ul className="slides">
                <li>
                    <img src={img5} alt="" style={{height: "80vh", width: "100vw"}} /> 
                    <div className="caption center-align">
                    <h3>Let us heal you</h3>
                    <h5 className="light grey-text text-lighten-3">Virtual Online Therapy</h5>
                    </div>
                </li>
                <li>
                    <img src={img7} alt="" style={{height: "80vh", width: "100vw"}} /> 
                    <div className="caption left-align">
                    <h3>REJOICE LIFE</h3>
                    <h5 className="light grey-text text-lighten-3">Our medical experts can help you work through such problems. </h5>
                    </div>
                </li>
                <li>
                    <img src={img6} alt="" style={{height: "80vh", width: "100vw"}} /> 
                    <div className="caption right-align">
                    <h3>Talk to us anytime</h3>
                    <h5 className="light grey-text text-lighten-3">Get a personal doctor in your hands. Video call our medical expert anytime and we are always here to listen to you. Talk to us about how you feel and we will help you make decisions.</h5>
                    </div>
                </li>
                <li>
                    <img src={img8} alt="" style={{height: "80vh", width: "100vw"}} /> 
                    <div className="caption center-align">
                    <h3>Our Services</h3>
                    <h5 className="light grey-text text-lighten-3">Specific goals for therapy will be determined by you and your therapist</h5>
                    </div>
                </li>
                </ul>
            </div>
            <section>
                <div class="parallax-container">
                    <div class="parallax"><img src={img1} alt='' /></div>
                </div>
                <div class="section white">
                    <div class="row container">
                        <h2 class="header">Let us heal you</h2>
                        <p class="grey-text text-darken-3 lighten-3">Get world class therapy from the confort of your home. Our promise to you is, we will HEAL you from your addictions and walk with you through the path of convalescence.</p>
                    </div>
                </div>
                <div class="parallax-container">
                    <div class="parallax"><img src={img2} alt='' /></div>
                </div>
                <div class="section white">
                    <div class="row container">
                        <h2 class="header">Our medical experts can help you work through such problems.</h2>
                        <p class="grey-text text-darken-3 lighten-3">HEAL is humble program to virtually connect convalescents. HEAL serves as platform for comprehensive program of rehabilation and addiction recovery treatment interventions including individual therapy, counseling, life-skills education and holistic modalities.Our experienced clinical staff is trained to guide you through self-discovery and healing, teaching you how to make better choices and lead a healthy, happy, and purposeful life. </p>
                    </div>
                </div>
                <div class="parallax-container">
                    <div class="parallax"><img src={img3} alt='' /></div>
                </div>
                <div class="section white">
                    <div class="row container">
                        <h2 class="header">Talk to us anytime</h2>
                        <p class="grey-text text-darken-3 lighten-3">Get a personal doctor in your hands. Video call our medical expert anytime and we are always here to listen to you. Talk to us about how you feel and we will help you make decisions </p>
                    </div>
                </div>
                <div class="parallax-container">
                    <div class="parallax"><img src={img4} alt='' /></div>
                </div>
                <div class="section white">
                    <div class="row container">
                        <h2 class="header">Our Services</h2>
                        <p class="grey-text text-darken-3 lighten-3">Specific goals for therapy will be determined by you and your therapist</p>
                    </div>
                </div>
            </section>
            <Footer style={{height: "20vh", width: "100vw"}}/>
        </div>
    )
}

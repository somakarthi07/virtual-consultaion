import React, {useEffect} from 'react'
import about from "../../assets/about.jpg"
import img9 from "../../assets/img9.jpg"
import img10 from "../../assets/img10.jpg"
import img11 from "../../assets/img11.jpg"
import img12 from "../../assets/img12.jpg"
import img13 from "../../assets/img13.jpg"
import img14 from "../../assets/img14.jpg"
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"
import M from "materialize-css";

export default function AboutPage() {

    const materialboxed = document.querySelectorAll(".materialboxed")

    useEffect(() => {
        M.AutoInit();
        M.Materialbox.init(materialboxed);
    })

    return (
        <div>
            <Navbar />
            
            <div class="parallax-container">
                <div class="parallax"><img src={about} alt='' /></div>
            </div>
            <div class="section white">
                    <div class="row container">
                        <h2 class="header">About our platform</h2>
                        <p class="grey-text text-darken-3 lighten-3">
                            HEAL is humble program to virtually connect convalescents. HEAL serves as platform for comprehensive program of rehabilation and addiction 
                            recovery treatment interventions including individual therapy, counseling, life-skills education and holistic modalities.
                            Our experienced clinical staff is trained to guide you through 
                            self-discovery and healing, teaching you how to make better choices and lead a healthy, happy, and purposeful life. 
                        </p>
                    </div>
                </div>
            <div class="parallax-container">
                <div class="parallax"><img src={img13} alt='' /></div>
            </div>
            <div class="section white">
                <div class="row container">
                    <h2 class="header">Patient flexibility</h2>
                    <p class="grey-text text-darken-3 lighten-3">
                        Patients can access healthcare services in a more convenient way. They don’t have to travel 
                        to clinics or take time away from work, childcare, or school.
                        They save money on travel, parking, and can be seen quicker if joining online is more convenient.
                    </p>
                </div>
            </div>
            <div class="parallax-container">
                <div class="parallax"><img src={img14} alt='' /></div>
            </div>
            <div class="section white">
                    <div class="row container">
                        <h2 class="header">Clinician flexibility</h2>
                        <p class="grey-text text-darken-3 lighten-3">
                        Virtual consultations offer flexibility for doctors and clinicians providing the consultation service. 
                        They can deliver sessions from home and outside of traditional surgery hours.
                        At Modality, we see changes in behaviour every time we implement a new virtual consultation service.
                        When people start using our OneConsultation service, peak usage is between 10am and 4pm during weekdays. As usage increases, we see more consultations happening earlier in the morning or later in the evening.
                        </p>
                    </div>
                </div>
            <div className='row'>
                <div className="col s12 m6 l6">
                    <div className="card">
                        <div className="card-image">
                            <img src={img9} className='materialboxed' alt="" />
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l6">
                    <div className="card">
                        <div className="card-image">
                            <img src={img10} className='materialboxed' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6 l6">
                    <div className="card">
                        <div className="card-image">
                            <img src={img11} className='materialboxed' alt="" />
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l6">
                        <div className="card">
                            <div className="card-image">
                                <img src={img12} className='materialboxed' alt="" />
                            </div>
                        </div>
                    </div>
            </div>
            <div class="section white">
                    <div class="row container">
                        <h2 class="header">Get started with virtual consultations</h2>
                        <p class="grey-text text-darken-3 lighten-3">
                        OneConsultation uses the latest WebRTC technology which means that patients can join the consultation from their web browser. 
                        </p>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

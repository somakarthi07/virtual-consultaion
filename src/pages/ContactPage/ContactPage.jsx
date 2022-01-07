import React from 'react'
import contact from "../../assets/contact.png"
import img15 from "../../assets/img15.jpg"
import img16 from "../../assets/img16.jpg"
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"
// import {InstagramIcon, FacebookIcon} from '@material-ui/icons/Instagram';

export default function ContactPage() {
    return (
        <div>
            <Navbar />
            
            <div class="parallax-container">
                <div class="parallax"><img src={contact} alt='' /></div>
            </div>
            <div class="section white">
                    <div class="row container">
                        <h2 class="header">Contact other doctors</h2>
                        <p class="grey-text text-darken-3 lighten-3">
                        Talk to other medical experts to suggest to your patients.
                        </p>
                    </div>
                </div>
            <div class="parallax-container">
                <div class="parallax"><img src={img16} alt='' /></div>
            </div>
            <div class="section white">
                <div class="row container">
                    <h2 class="header">Road to recovery brgins now! LETS HEAL</h2>
                    <p class="grey-text text-darken-3 lighten-3">
                        Virtual consultations are a modern way of delivering traditional consultations. When implemented, 
                        they present an opportunity to deliver a secure digital healthcare service to your patients. 
                        In doing so, both you and your patient can adapt to the modern way in which we work and communicate.
                    </p>
                </div>
            </div>
            <div class="parallax-container">
                <div class="parallax"><img src={img15} alt='' /></div>
            </div>
            <div class="section white">
                    <div class="row container">
                        <h2 class="header">Follow Us</h2>
                        <p class="grey-text text-darken-3 lighten-3">
                        Visit our social media handle where we post mindfull content and wellpost everyday!
                        </p>
                        <p><i className="material-icons">facebook</i></p>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

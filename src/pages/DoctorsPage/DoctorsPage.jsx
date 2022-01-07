import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"
import Doctors from "../../components/Doctors/Doctors";

export default function DoctorsPage() {
    return (
        <div>
            <Navbar />
            <Doctors />
            <Footer />
        </div>
    )
}

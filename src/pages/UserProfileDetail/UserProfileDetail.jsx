import React from 'react';
import DoctorDetail from '../../components/DoctorDetail/DoctorDetail';
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"

export default function ProfilePage() {
    return (
        <div>
            <Navbar />
            <DoctorDetail />
            <Footer />
        </div>
    )
}

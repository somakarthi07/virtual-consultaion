import React from 'react';
import UserDetail from '../../components/UserDetail/UserDetail';
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"

export default function ProfilePage() {
    return (
        <div>
            <Navbar />
            <UserDetail />
            <Footer />
        </div>
    )
}

import React from 'react'
import VideoPosts from '../../components/VideoPosts/VideoPosts'
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"

export default function VideosPage() {
    return (
        <div>
            <Navbar />
            <VideoPosts />
            <Footer />
        </div>
    )
}

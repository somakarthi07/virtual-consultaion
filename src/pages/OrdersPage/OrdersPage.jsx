import React from 'react'
import Products from "../../components/Products/Products"
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"
import Orders from '../../components/Orders/Orders'

export default function OrdersPage() {
    return (
        <div>
            <Navbar />
                <Orders />
            <Footer />
        </div>
    )
}

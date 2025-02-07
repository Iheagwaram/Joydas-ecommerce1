import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Mainlayout = () => {
    return (
        <>
            <div >
                <Navbar />
                <div className='flex flex-grow min-h-screen'>
                    <Sidebar />
                    <div className='flex-grow p-6'>
                        <Navigation />
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Mainlayout

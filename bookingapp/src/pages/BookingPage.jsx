import React from 'react'
import Navbar from '../components/BookingComponents/Navbar'
import Intro from '../components/BookingComponents/Intro'
import Work from '../components/BookingComponents/work'
import Featured from '../components/BookingComponents/featured'

const BookingPage = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <Work />
            <Featured />
        </>

    )
}

export default BookingPage
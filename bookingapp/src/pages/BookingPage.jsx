import React from 'react'
import Navbar from '../components/BookingComponents/Navbar'
import Intro from '../components/BookingComponents/Intro'
import Work from '../components/BookingComponents/work'
import Featured from '../components/BookingComponents/featured'
import Explore from '../components/BookingComponents/explore'
import Mobile from '../components/BookingComponents/Mobile'

const BookingPage = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <Work />
            <Featured />
            <Explore />
            <Mobile />
        </>
    );
}

export default BookingPage
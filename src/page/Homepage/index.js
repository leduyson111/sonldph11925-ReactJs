import React from 'react'
import Banner from '../../components/Banner'
import Albums from '../../components/Album';

const Homepage = ({ albums, categories }) => {
    return (
        <div>
            <Banner data={categories} />



            
            <Albums data={albums} />
        </div>
    )
}

export default Homepage

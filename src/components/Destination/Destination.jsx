import React from 'react'
import './Destination.css'
import dest1 from '../../assets/1.jpg'
import dest2 from '../../assets/2.jpg'
import dest3 from '../../assets/5.jpg'
import dest4 from '../../assets/8.jpg'
import DestinationData from './DestinationData'

const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see alot, within a time frame.</p>
            <DestinationData
                heading='Taal Volcano, Batangas'
                text='One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!'
                img1={dest1}
                img2={dest2}
                cName='first-des'
            />

            <DestinationData
                heading='Kund Malir Beach, Balochistan'
                text='Tucked along the Makran Coastal Highway, Kund Malir Beach offers an untouched escape where golden sands meet the turquoise waters of the Arabian Sea. Surrounded by rocky cliffs and the majestic Hingol National Park, this serene beach is perfect for travelers seeking peace and natural beauty. The drive itself is a scenic journey through winding desert roads and rugged mountains. Whether you’re watching the sunset, listening to the waves crash, or simply relaxing under the open sky, Kund Malir promises a refreshing retreat far from the noise of city life'
                img1={dest3}
                img2={dest4}
                cName='first-des-reverse'
            />

        </div>
    )
}

export default Destination

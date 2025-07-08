import React from 'react'
import './Trip.css'
import TripData from './TripData'
import trip1 from '../../assets/10.jpg'
import trip2 from '../../assets/3.jpg'
import trip3 from '../../assets/6.jpg'

const Trip = () => {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className='tripcard'>
                <TripData 
                image={trip1}
                heading='Trip in Indonesia 🇮🇩'
                text='A land of over 17,000 islands, Indonesia is a tropical paradise known for its rich culture, vibrant traditions, and breathtaking landscapes. From the serene beaches of Bali to the ancient temples of Yogyakarta and the active volcanoes of Java, Indonesia offers adventure, spirituality, and natural beauty all in one.'
                />
                <TripData 
                image={trip2}
                heading='Trip in Malaysia 🇲🇾'
                text='Malaysia is a melting pot of cultures, where modern skyscrapers stand alongside historic mosques and colorful temples. Explore the bustling streets of Kuala Lumpur, relax on the pristine beaches of Langkawi, or trek through the lush rainforests of Borneo to discover rare wildlife and stunning waterfalls.'
                />
                <TripData 
                image={trip3}
                heading='Trip in France 🇫🇷'
                text='France enchants visitors with its romantic cities, charming villages, and world-renowned cuisine. From the iconic Eiffel Tower in Paris to the lavender fields of Provence and the sun-kissed Riviera coastline, France offers a perfect blend of art, history, fashion, and scenic beauty.'
                />
            </div>
        </div>
    )
}

export default Trip

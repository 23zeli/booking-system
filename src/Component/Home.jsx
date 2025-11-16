import React from 'react'
import { useNavigate } from 'react-router-dom';
import desktopFood from '../assets/images/restauranfood.webp';
import mobFood from '../assets/images/restauranfood-768.webp';

import './Home.css'
import Specials from './Specials';

function Home() {
  const navigate = useNavigate();

  const handleReserveTable = () => {
    navigate('/reservations');
  };

  return (
    <div className='homepage-container'>
      <div id='homepage' className="homepage">
        <div className="home-cards">
          <div
            className="card text"
            // style={{marginTop: "40px"}}
          >
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            {/* <p>
              <span
                style={{display: "block"}}
              >
                   We are a family-owned
              </span>
                Mediterranean restaurant,
              <span
                style={{display: "block"}}
              >
               focused on traditional
              </span>
                recipes served with a modern
              <span
                style={{display: "block"}}
              >
                twist.
              </span>
            </p> */}
            <p> We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button onClick={handleReserveTable}>Reserve a table</button>
          </div>
          <div className="card restaurant-image">
            <picture>
              <source media='max-width: 768px' srcSet={mobFood}/>
              <img id='img-restaurantFood' src={desktopFood} alt="Restaurant Food" />
            </picture>
          </div>
        </div>
      </div>
      <Specials />
    </div>
  )
}

export default Home
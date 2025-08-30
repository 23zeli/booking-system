import React from 'react'
import saladImage from '../assets/images/greek salad.jpg';
import bruchettaImage from '../assets/images/bruchetta.png';
import dessertImage from '../assets/images/lemon dessert.jpg';
import './Specials.css'

export default function () {
  return (
        <div
            className='specials'
            style={{
                maxWidth: '860px',
                width: 'fit-content',
                height: "fit-content",
                margin: "auto",
                paddingBottom: '1.25rem',
            }}
            id='specials'
        >
            <div className="flex-container">
                <div className="hero-header">
                    <h1>This weeks Specials!</h1>
                    <button>Online Menu</button>
                </div>
                <div className="hero-section-container">
                    <div className="greek-salad">
                        <img id='greek_salad' src={saladImage} alt="Greek Salad" />
                        <h3>Greek salad</h3>
                        <p>
                            The famous Greek salad of crispy lettuce, peppers, olives and our              Chicago style  feta cheese garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <p>Order a delivery</p>
                    </div>
                    <div>
                        <img id='bruchetta' src={bruchettaImage} alt="Bruchetta" />
                        <h3>Bruchetta</h3>
                        <p>
                            Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </p>
                        <p>Order a delivery</p>
                    </div>
                    <div>
                        <img id='lemon_dessert' src={dessertImage} alt="lemon dessert" />
                        <h3>Lemon Desert</h3>
                        <p>
                            This comes straight from grandma’s recipe book, every last ingredient has been sourced and is authentic as can be imagined.
                        </p>
                        <p>Order a delivery</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

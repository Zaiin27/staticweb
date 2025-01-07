import React from 'react'
import { Link } from 'react-router-dom'
import data from './data.js'
import { cardData } from './cardData.js'
import BoxSection from '../components/BoxSection/BoxSection.jsx'
import CardSection from '../components/CardSection/CardSection.jsx'
const Home = () => {

    const handleScroll = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };
  return (
    
    <div>
        
        <section class="bg-light text-section py-4">
    <div class="container">
        <p class="text-center text text-primary">
            † Monthly price of your Airtime Plan will increase each April from April 2025 by the Retail Price Index rate of inflation announced in February each year plus 3.9%.
        </p>
    </div>
        </section>
       
        {data.map((item, index) => (
        <section key={index}>
          <div className="position-relative">
            <img src={item.image} alt={item.heading} className="img-fluid img-banner" />
            <div className="img-overlay">
              <h2>{item.heading}</h2>
              <p className='para'>{item.paragraph}</p>
              <Link href="#" className="btn btn-custom mt-3">{item.buttonText}</Link>
            </div>
            <div className="position-absolute bottom-10 start-50 translate-middle">
              <div className="btn-circle" onClick={handleScroll}>
                <i className="arrow-down">↓</i>
              </div>
            </div>
          </div>
        </section>
      ))}

        <div className=" container d-flex justify-content-evenly py-5 ">
      <div className="row ">
        {cardData.map((card, index) => (
          <div className="col-md-6" key={index}>
            <div className="card h-100" >
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <Link href="#" className="btn btn-primary mt-auto">
                  {card.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

<div>
    <BoxSection/>
</div>

<div>
    <CardSection/>
</div>


    </div>
  )
}

export default Home
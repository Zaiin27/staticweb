import React from 'react';

const CardSection = () => {
  const cardData = [
    {
      icon: "./images/house.webp",
      title: "Find a store",
      description: "Look for your nearest O2 store",
      buttonText: "Go to store locator",
    },
    {
      icon: "./images/phone.webp",
      title: "O2 WiFi hotspot",
      description: "Save your data, use ours",
      buttonText: "Find a hotspot",
    },
    {
      icon: "./images/signals.webp",
      title: "Our network status",
      description: "Keep tabs on coverage in your area, from our award-winning network",
      buttonText: "Check network status",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4">
        {cardData.map((card, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="card h-100 text-center border-0 shadow-sm">
              {/* Top Section with Full Image */}
              <div className="card-img-top" style={{ overflow: "hidden" }}>
                <img
                  src={card.icon}
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "300px", // Increased height
                    objectFit: "cover",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                  }}
                />
              </div>
              {/* Card Content */}
              <div className="card-body">
                <h5 className="card-title fw-bold" style={{ fontSize: "1.25rem" }}> {/* Increased font size */}
                  {card.title}
                </h5>
                <p className="card-text text-muted" style={{ fontSize: "1rem" }}> {/* Increased font size */}
                  {card.description}
                </p>
                <button className="btn btn-primary">{card.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Text Section */}
      <div className="mt-4">
        <p style={{ fontSize: "1rem" }}>
          † The monthly price of your Airtime Plan will increase each April from April 2025 by the Retail Price Index rate of inflation announced in February each year plus 3.9%. If RPI is negative, we'll only apply the 3.9%. See{" "}
          <a href="https://www.o2.co.uk/prices" target="_blank" rel="noopener noreferrer">
            https://www.o2.co.uk/prices
          </a>
        </p>
      </div>
    </div>
  );
};

export default CardSection;

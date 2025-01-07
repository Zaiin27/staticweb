import React from 'react';
import './BoxSection.css'; // Custom styling

const BoxSection = () => {
  const boxes = [
    { icon: "https://a.storyblok.com/f/253875/40x40/b512b4b0a3/phones.svg", label: 'Phone' },
    { icon: "https://a.storyblok.com/f/253875/40x40/5f1d99d296/sim.svg", label: 'Sim' },
    { icon: "https://a.storyblok.com/f/253875/40x40/bdb92bc9ca/tablets.svg", label: 'Tablets' },
    { icon: "https://a.storyblok.com/f/253875/40x40/0ebdd15ecb/upgrade.svg", label: 'Upgrade' },
    { icon: "https://a.storyblok.com/f/253875/40x40/0490fab40c/pricing-bill.svg", label: 'Billing' },
    { icon: "https://a.storyblok.com/f/253875/40x40/8277ffe137/help.svg", label: 'Help' },
  ];

  return (
    <div className="container py-5">
      <div className="row g-3">
        {boxes.map((box, index) => (
          <div className="col-6 col-md-4 col-lg-2" key={index}>
            <div className="box d-flex flex-column align-items-center justify-content-center text-center">
              <img src={box.icon} alt={box.label} className="box-icon" />
              <p className="box-label">{box.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxSection;

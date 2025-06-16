import React, { useState } from 'react';
import './Feature.css';

const featureData = [
  {
    title: 'Masters Modules',
    items: [
      'Product Master',
      'Customers Master',
      'Vendor Master',
      'HSN Master',
      'Drawing Master',
      'Quality Plan Master',
      'TDC Master',
    ],
  },
  {
    title: 'Purchase Module',
    items: [
      'Purchase Indent',
      'Purchase Quotation',
      'Purchase Order',
      'Purchase Amendment',
      'Short Close Purchase Orders',
    ],
  },
  {
    title: 'Inventory Module',
    items: [
      'Purchase Receipts',
      'Material Requisition',
      'GRN',
      'Inventory Adjustment',
    ],
  },
  {
    title: 'Quality Module',
    items: [
      'Measuring References',
      'Inwards Inspector',
      'Inward Inspection Jobwork',
    ],
  },
  {
    title: 'Sales Module',
    items: [
      'Sales Quotation',
      'Sales Order',
      'Schedule Order',
      'Schedule Amendment',
      'Sales Pricelist',
    ],
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetails = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <h1 className="headline">PRODUCT FEATURES</h1>

      <div className="box">
        {featureData.map((feature, index) => (
          <div
            className="main-point"
            key={index}
            onClick={() => toggleDetails(index)}
          >
            <span className="icon">{activeIndex === index ? '-' : '+'}</span>
            <span className="m1">{feature.title}</span>
            <div className={`details ${activeIndex === index ? 'active' : ''}`}>
              <ul>
                {feature.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default Features;

import React, { useState, useEffect } from 'react';
import './Services.css';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => {
        setServiceData(data);
      });
  }, []);

  return (
    <section className="services">
      <div className="container px-lg-0">
        <div className="row">
          <div className="services-top text-center">
            <h5>Services</h5>
            <h2>
              We're an agency tailored to all{' '}
              <span className="d-block">
                clients' needs that always delivers
              </span>
            </h2>
          </div>
          {serviceData.map(service => (
            <ServicesCard service={service} key={service._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

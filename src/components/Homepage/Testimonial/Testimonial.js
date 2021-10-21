import React, { useState } from 'react';
import './Testimonial.css';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { useEffect } from 'react/cjs/react.development';

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    fetch('https://luxuryliving.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => setTestimonialData(data));
  }, []);

  return (
    <section className="testimonial">
      <div className="container px-lg-0">
        <div className="row">
          <div className="testi-top text-center">
            <h2>Testimonials</h2>
          </div>
          {testimonialData.map(test => (
            <TestimonialCard test={test} key={test._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

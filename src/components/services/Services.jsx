import React, { useEffect, useState } from 'react';
import * as service from '../../services/WorksCrudServices';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    service.getAllServices(setServices);
  }, []);

  return (
    <div className="container">
      <h2>Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>{service.name} - ${service.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Services;

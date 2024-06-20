import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as service from '../../services/WorksCrudServices';

const EditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState('');

  useEffect(() => {
    service.getServiceById(setServiceData, id);
  }, [id]);

  const handleChange = (e) => {
    setServiceData(e.target.value);
  }

  const handleUpdate = () => {
    service.updateService(id, { name: serviceData });
    navigate('/manage-services');
  }

  return (
    <div className="container">
      <h2>Redaguoti paslaugą</h2>
      <input type="text" value={serviceData} onChange={handleChange} />
      <button onClick={handleUpdate} className="btn btn-primary">Atnaujinti</button>
    </div>
  );
}

export default EditService;

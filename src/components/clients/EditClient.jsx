import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as service from '../../services/WorksCrudServices';

const EditClient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState('');

  useEffect(() => {
    service.getClientById(setClient, id);
  }, [id]);

  const handleChange = (e) => {
    setClient(e.target.value);
  }

  const handleUpdate = () => {
    service.updateClient(id, { name: client });
    navigate('/manage-clients');
  }

  return (
    <div className="container">
      <h2>Redaguoti klientą</h2>
      <input type="text" value={client} onChange={handleChange} />
      <button onClick={handleUpdate} className="btn btn-primary">Atnaujinti</button>
    </div>
  );
}

export default EditClient;

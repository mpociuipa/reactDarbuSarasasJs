import React, { useState, useEffect } from 'react';
import * as service from '../../services/WorksCrudServices';
import { useNavigate } from 'react-router-dom';

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState('');

  useEffect(() => {
    service.getAllServices(setServices);
  }, []);

  const handleChange = (e) => {
    setNewService(e.target.value);
  }

  const handleAdd = () => {
    service.addService({ name: newService });
    setNewService('');
  }

  const handleDelete = (id) => {
    service.deleteService(id);
  }

  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Paslaugų valdymas</h2>
      <input type="text" value={newService} onChange={handleChange} placeholder="Nauja paslauga" />
      <button onClick={handleAdd} className="btn btn-primary">Pridėti paslaugą</button>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Paslauga</th>
            <th>Veiksmai</th>
          </tr>
        </thead>
        <tbody>
          {services.map(service => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>
                <button onClick={() => navigate(`/update-service/${service.id}`)} className="btn btn-warning">Keisti</button>
                <button onClick={() => handleDelete(service.id)} className="btn btn-danger">Šalinti</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageServices;

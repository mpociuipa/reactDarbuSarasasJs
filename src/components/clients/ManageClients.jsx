import React, { useState, useEffect } from 'react';
import * as service from '../../services/WorksCrudServices';
import { useNavigate } from 'react-router-dom';

const ManageClients = () => {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState('');

  useEffect(() => {
    service.getAllClients(setClients);
  }, []);

  const handleChange = (e) => {
    setNewClient(e.target.value);
  }

  const handleAdd = () => {
    service.addClient({ name: newClient });
    setNewClient('');
  }

  const handleDelete = (id) => {
    service.deleteClient(id);
  }

  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Klientų valdymas</h2>
      <input type="text" value={newClient} onChange={handleChange} placeholder="Naujas klientas" />
      <button onClick={handleAdd} className="btn btn-primary">Pridėti klientą</button>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Klientas</th>
            <th>Veiksmai</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>
                <button onClick={() => navigate(`/update-client/${client.id}`)} className="btn btn-warning">Keisti</button>
                <button onClick={() => handleDelete(client.id)} className="btn btn-danger">Šalinti</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageClients;

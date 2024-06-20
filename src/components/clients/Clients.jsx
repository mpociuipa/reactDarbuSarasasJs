import React, { useEffect, useState } from 'react';
import * as service from '../../services/WorksCrudServices';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    service.getAllClients(setClients);
  }, []);

  return (
    <div className="container">
      <h2>Clients</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>{client.name} - {client.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Clients;

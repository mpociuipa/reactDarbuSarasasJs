import Header from "../header/Header";
import Works from "../works/Works";
import AddWork from "../addWork/AddWork";
import Login from "../user/login/Login";
import Register from "../user/register/Register";
import Reset from "../user/reset/Reset";
import Clients from "../clients/Clients";
import Services from "../services/Services";
import ManageClients from "../clients/ManageClients";
import ManageServices from "../services/ManageServices";
import EditClient from "../clients/EditClient"; // Import EditClient komponentą
import EditService from "../services/EditService"; // Import EditService komponentą
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Works />} />
          <Route path="/add-work" element={<AddWork />} />
          <Route path="/update/:id" element={<AddWork />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services />} />
          <Route path="/manage-clients" element={<ManageClients />} />
          <Route path="/manage-services" element={<ManageServices />} />
          <Route path="/update-client/:id" element={<EditClient />} /> {/* Pridėti klientų redagavimas maršrutą */}
          <Route path="/update-service/:id" element={<EditService />} /> {/* Pridėti paslaugų redagavimas maršrutą */}
        </Routes>
      </Router>
    </>
  );
}

export default App;




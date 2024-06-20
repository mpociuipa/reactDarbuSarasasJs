import { Link } from "react-router-dom";
import Profile from "../user/profile/Profile";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Time logger</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <Profile />
          <Link to="/reset" className="dropdown-item">Reset</Link>
          <Link to="/clients" className="dropdown-item">Clients</Link>
          <Link to="/services" className="dropdown-item">Services</Link>
          <Link to="/manage-clients" className="dropdown-item">Klientų valdymas</Link> {/* Pridedame klientų valdymas linką */}
          <Link to="/manage-services" className="dropdown-item">Paslaugų valdymas</Link> {/* Pridedame paslaugų valdymas linką */}
        </div>
      </div>
    </nav>
  );
}

export default Header;

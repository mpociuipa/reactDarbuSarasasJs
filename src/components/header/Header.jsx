import { Link } from "react-router-dom";
import Profile from "../user/profile/Profile";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Time logger</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <Profile />
                    {user && <>
                        <Link to="/reset" className="dropdown-item">Reset</Link>
                        <Link to="/clients" className="dropdown-item">Clients</Link>
                        <Link to="/services" className="dropdown-item">Services</Link>
                        <Link to="/manage-clients" className="dropdown-item">Klientų valdymas</Link>
                        <Link to="/manage-services" className="dropdown-item">Paslaugų valdymas</Link>
                    </>}
                </div>
            </div>
        </nav>
    );
}

export default Header;

import PropTypes from 'prop-types';

const Navbar = ({ setCategory }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger p-4 sticky-top">
            <div className="container-fluid">
                <h3 className="navbar-brand"><span className="badge bg-dark text-light fs-4">News.dev</span></h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                            <div className="nav-link" onClick={() => setCategory("technology")}>Technology</div>
                        </li>
                        <li className="nav-item fs-5">
                            <div className="nav-link" onClick={() => setCategory("business")}>Business</div>
                        </li>
                        <li className="nav-item fs-5">
                            <div className="nav-link" onClick={() => setCategory("health")}>Health</div>
                        </li>
                        <li className="nav-item fs-5">
                            <div className="nav-link" onClick={() => setCategory("sports")}>Sports</div>
                        </li>
                        <li className="nav-item fs-5">
                            <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    setCategory: PropTypes.func.isRequired,
};

export default Navbar;

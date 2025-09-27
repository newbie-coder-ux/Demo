import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Header() {
  const navigate = useNavigate();  
  const handleLogout = () => {
    sessionStorage.setItem('isLoggedIn',false);  
    navigate('/login');  
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Your Logo</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

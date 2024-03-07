import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsMag</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <div className="nav-link" onClick={()=>setCategory("technology")} href="#">
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={()=>setCategory("business")} href="#">
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link"  onClick={()=>setCategory("health")} href="#">
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={()=>setCategory("sports")} href="#">
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={()=>setCategory("entertainment")} href="#">
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

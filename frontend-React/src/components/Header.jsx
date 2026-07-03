import React from 'react'
import '../assets/css/style.css';

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        
        <a className="navbar-brand brand-logo" href="#home">
          <span className="brand-accent">Stock</span>Prediction
        </a>

        
        <div className="nav-actions d-flex gap-3 align-items-center">
          <a href="#login" className="btn btn-login">
            Log In
          </a>
          <a href="#register" className="btn btn-register">
            Register
          </a>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
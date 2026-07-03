import React from 'react';
import '../assets/css/style.css'; 

const Footer = () => {
  return (
    <footer className="dashboard-footer mt-5 py-4">
      <div className="container">
        <div className="row align-items-center justify-content-between text-center text-md-start">
          
          {/* Left Side: Brand and Disclaimer */}
          <div className="col-md-6 mb-3 mb-md-0">
            <span className="footer-brand"><span className="brand-accent">Stock</span>Prediction</span>
            <p className="footer-disclaimer mb-0 mt-1">
              Data provided for educational and algorithmic simulation purposes only. Not financial advice.
            </p>
          </div>

          {/* Right Side: Links & Utility Actions */}
          <div className="col-md-6 text-md-end">
            <ul className="footer-links list-inline mb-0">
              <li className="list-inline-item">
                <a href="#privacy" className="footer-link">Privacy Policy</a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="#terms" className="footer-link">Terms of Service</a>
              </li>
              <li className="list-inline-item">
                <span className="footer-copyright">© {new Date().getFullYear()} Model System</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
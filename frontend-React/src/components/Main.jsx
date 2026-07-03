import React from 'react';
import '../assets/css/style.css';

const Main = () => {
  return (
    <div className="dashboard-container container my-4">
      
      {/*  Header */}
      <div className="dashboard-hero p-5 text-center mb-4">
        <h1 className="dashboard-title">Stock Analytics & Prediction</h1>
        <p className="dashboard-subtitle lead mx-auto">
          Leverage historical financial data and advanced machine learning models to analyze market trends and forecast future stock movements.
        </p>
      </div>

     

      {/*  Market Overview  */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card-custom p-4 metric-card">
            <span className="metric-label text-muted">Model Accuracy</span>
            <div className="d-flex align-items-baseline gap-2 mt-2">
              <h3 className="metric-value">94.2%</h3>
              <span className="badge badge-success">+1.2% this week</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-custom p-4 metric-card">
            <span className="metric-label text-muted">Active Tickers Tracked</span>
            <div className="d-flex align-items-baseline gap-2 mt-2">
              <h3 className="metric-value">500+</h3>
              <span className="badge badge-neutral">NSE / NYSE</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-custom p-4 metric-card">
            <span className="metric-label text-muted">Latest ML Run</span>
            <div className="d-flex align-items-baseline gap-2 mt-2">
              <h3 className="metric-value">Real-time</h3>
              <span className="badge badge-info">Stable</span>
            </div>
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default Main;
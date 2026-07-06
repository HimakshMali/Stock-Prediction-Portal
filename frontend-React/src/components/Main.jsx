import {useContext} from 'react';
import '../assets/css/style.css';
import { AuthContext } from '../AuthProvider';
import { Link } from 'react-router-dom';
import LeadCard from './LeadCard';

const Main = () => {

  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

 const fetchLead = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/leads/${id}/`);
    
    // Check if the server sent a 200 OK or an error status code
    if (!response.ok) {
      console.error(`Server returned status: ${response.status}`);
      return; 
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Network error occurred:", error);
  }
};
  return (
    <div className="dashboard-container container my-4">

           {/* Dynamic Auth Onboarding Section */}
<div className="card-custom mb-4 overflow-hidden position-relative dynamic-auth-banner">
  {isLoggedIn ? (
    /* Logged In State: Optimistic Dashboard Access */
    <div className="banner-content p-4 d-flex flex-column flex-md-row gap-3 align-items-center justify-content-between position-relative">
      <div className="d-flex align-items-center gap-3">
        <div className="icon-wrapper icon-success fs-4">✔️</div>
        
        <div>
          <h5 className="banner-title m-0">Great to see you back!</h5>
          <p className="banner-text m-0 text-muted">You are securely logged in. Ready to run your predictive machine learning models?</p>
        </div>
      </div>
      <Link to="/dashboard" className="btn btn-action-success">
           Go to prediction workspace
        </Link>
    </div>
  ) : (
    /* Logged Out State: Bright, Welcoming Invite */
    <div className="banner-content p-4 d-flex flex-column flex-md-row gap-3 align-items-center justify-content-between position-relative">
      <div className="d-flex align-items-center gap-3">
        <div className="icon-wrapper icon-primary fs-4">🚀</div>  
        <div>
          <h5 className="banner-title m-0">Let's get you started</h5>
          <p className="banner-text m-0 text-muted">Create a free portal account to save custom ticker forecasts and track model analysis metrics.</p>
        </div>
      </div>
      <div className="d-flex flex-column gap-2 w-100 w-md-auto align-items-end justify-content-md-end">
  <Link to="/register" className="btn btn-action-primary">
    Get Started Now
  </Link>
  <Link to="/login" className="btn btn-text-link mb-2">
    Already have an account? Log In
  </Link>
  
</div>
    </div>
  )}
</div>  
      
      {/*  Header */}
      <div className="dashboard-hero p-5 text-center mb-4">
        <h1 className="dashboard-title">Stock Analytics & Prediction</h1>
        <p className="dashboard-subtitle lead mx-auto">
          Leverage historical financial data and advanced machine learning models to analyze market trends and forecast future stock movements.
        </p>
      </div>

      {/* <button onClick={() => fetchLead(2)}>fetch lead</button>
       */}

       {/* <LeadCard/> */}

 

     

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
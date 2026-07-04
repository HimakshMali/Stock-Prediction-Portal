import React, { useState } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../assets/css/style.css';
const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false) // Toggle password visibility
    const [errors, setErrors] = useState({}) 
    const [success, setsuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const userData = { username, email, password }

    const handleRegistration = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
            console.log('response data from server is ', response.data)
            console.log('user is added successfully')
            setErrors({})
            setsuccess(true)
        } catch (error) {
            console.log('error occurred which is ', error)
            setErrors(error.response.data)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="auth-container">
            {/* Left Side: Modern Visual Art Panel */}
            <div className="auth-visual-panel">
                <img 
                    src="https://images.pexels.com/photos/29474094/pexels-photo-29474094.jpeg" 
                    alt="Abstract Corporate Design" 
                    className="auth-visual-img"
                />
            </div>

            {/* Right Side: Clean Professional Form Panel */}
            <div className="auth-form-panel">
                <div className="auth-form-wrapper">
                    
                    {/* Brand / Company Header */}
                    <div className="auth-brand">
                        <h5>Project by</h5>
                        <h2 className="brand-logo">Himaksh<span className="brand-sub">M.</span></h2>
                    </div>

                    <h3 className="auth-title">Create an account</h3>

                    <form onSubmit={handleRegistration} className="auth-form">
                        
                        {/* Username Input Group */}
                        <div className="input-group-custom">
                            <label className="input-label">Login*</label>
                            <input 
                                type="text" 
                                className={`form-input ${errors.username ? 'input-error-border' : ''}`}
                                placeholder="login" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                            {errors.username && <small className="error-text">{errors.username}</small>}
                        </div>

                        {/* Email Input Group */}
                        <div className="input-group-custom">
                            <label className="input-label">Email*</label>
                            <input 
                                type="email" 
                                className={`form-input ${errors.email ? 'input-error-border' : ''}`}
                                placeholder="mail@gmail.com" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            {errors.email && <small className="error-text">{errors.email}</small>}
                        </div>

                        {/* Password Input Group */}
                        <div className="input-group-custom">
                            <label className="input-label">Password*</label>
                            <div className="password-input-wrapper">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    className={`form-input ${errors.password ? 'input-error-border' : ''}`}
                                    placeholder="••••••••••••••••" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                                <button 
                                    type="button" 
                                    className="password-toggle-btn"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            {errors.password && <small className="error-text">{errors.password}</small>}
                        </div>

                        {/* Submit Action Block */}
                        <div className="action-block">
                            <button type="submit" className="btn-submit" disabled={loading}>
                                {loading ? <span className="spinner"></span> : "Sign Up"}
                            </button>
                        </div>

                        {/* Status Notices */}
                        {success && <div className="alert-success">User registered successfully!</div>}
                    </form>

                    {/* Terms & Conditions Notice */}
                    <p className="terms-text">
                        By clicking the "Sign Up" button, you are creating an account and therefore you agree to Data Bridge Ventures Company's <a href="#/terms">Terms of Use</a> and <a href="#/privacy">Privacy Policy</a>.
                    </p>

                    {/* Footer Redirection Options */}
                    <div className="auth-footer-links">
                        <span className="redirect-text">Already have an account? <Link to="/login" className="link-highlight">Log in</Link></span>
                        
                        <div className="back-navigation">
                            <Link to="/" className="btn-back">
                                <span className="arrow">←</span> Back
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register;

/* ==========================================================================
   DEVELOPMENT & ARCHITECTURAL NOTES
   ==========================================================================
   1. CORS Management:
      Cross-Origin Resource Sharing (CORS) security policies block script-based
      requests initiated from different origins. Ensure 'django-cors-headers'
      is fully configured in your Django settings framework.
   
   2. Route Transitions:
      Always favor react-router-dom <Link> tags over native <a> anchors. 
      This preserves single-page application (SPA) state and prevents full 
      browser reloads.
   ========================================================================== */        
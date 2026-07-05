import React, { useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../assets/css/style.css';
import axios from 'axios';
import { AuthContext } from '../AuthProvider';


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] =  useState('')
    const {isLoggedIN, setIsLoggedIn} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault()
        const userData = {username, password}
        console.log('user data is ', userData)
        setLoading(true)

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/jwt/token/', userData)
            localStorage.setItem('accessToken', response.data.access)
            localStorage.setItem('refreshToken', response.data.refresh)
            console.log('response data from server is ', response.data)
            console.log("login sucessfull")
            setIsLoggedIn(true)
            navigate('/')
            

        } catch (error) {
            console.error('invalid creds',error)
            setError(error.data)
            
        }finally {
            setLoading(false)
        }

    }

    return (
        <div className="auth-container">
            {/* Left Side: Clean Professional Form Panel */}
            <div className="auth-form-panel">
                <div className="auth-form-wrapper">
                    
                    {/* Brand / Company Header */}
                    <div className="auth-brand">
                        <h2 className="brand-logo">Welcome<span className="brand-sub">Again</span></h2>
                    </div>

                    {/* <h3 className="auth-title">Welcome back</h3> */}

                    <form className="auth-form" onSubmit={handleLogin}>
                        
                        {/* Username/Login Input Group */}
                        <div className="input-group-custom">
                            <label className="input-label">Login*</label>
                            <input 
                                type="text" 
                                className="form-input"
                                placeholder="login or email" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                        </div>

                        {/* Password Input Group */}
                        <div className="input-group-custom">
                            <div className="input-label-row">
                                <label className="input-label">Password*</label>
                                <a href="#/forgot-password" className="forgot-password-link">Forgot password?</a>
                            </div>
                            <div className="password-input-wrapper">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    className="form-input"
                                    placeholder="••••••••••••••••" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />

                                {error && <p className="error-message">{error.data}</p>}
                                <button 
                                    type="button" 
                                    className="password-toggle-btn"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Submit Action Block */}
                        <div className="action-block">
                            <button type="submit" className="btn-submit" disabled={loading}>
                                {loading ? "Signing in..." : "Sign In"}
                            </button>
                        </div>
                    </form>

                    {/* Footer Redirection Options */}
                    <div className="auth-footer-links login-footer-adjust">
                        <span className="redirect-text">Don't have an account? <Link to="/register" className="link-highlight">Sign up</Link></span>
                        
                        <div className="back-navigation">
                            <Link to="/" className="btn-back">
                                <span className="arrow">←</span> Back to Home
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Right Side: Modern Visual Art Panel */}
            <div className="auth-visual-panel">
                <img 
                src='https://images.pexels.com/photos/25626506/pexels-photo-25626506.jpeg'
                    // src="https://images.pexels.com/photos/29579754/pexels-photo-29579754.jpeg" 
                    alt="Abstract Corporate Design" 
                    className="auth-visual-img"
                />
            </div>
        </div>
    )
}

export default Login
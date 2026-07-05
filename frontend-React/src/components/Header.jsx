import {useContext} from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
import { AuthContext } from '../AuthProvider';
// import { Link } from 'react-router-dom
const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const handleLogout = () =>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    // navigate('/')/
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        
        <a className="navbar-brand brand-logo" href="#home">
          <span className="brand-accent">Stock</span>Prediction
        </a>

        
        <div className="nav-actions d-flex gap-3 align-items-center">
          {isLoggedIn ? (
  
            <span><button className='btn btn-login'
            onClick={handleLogout}>Logout</button></span>
          ): (
          <Link to="/login" className="btn btn-login">
            login
          </Link>
          )}
          <Link to="/register" className="btn btn-register">
            Register
          </Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
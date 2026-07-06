import { useState } from 'react'
import './App.css'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import './assets/css/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthProvider from './AuthProvider'
import Dashoard from './components/dashboard/Dashoard'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="app-layout">
      <Header />
      <main className="main-content">
        <Main />
      </main>
      <Footer />
    </div> */}
    <AuthProvider>




      <BrowserRouter>
        <Routes>


          <Route path='/' element={
            <div className="app-layout">
              <Header />
              <main className="main-content">
                <Main />
              </main>
              <Footer />
            </div>
          } />


          {/* <Route path='/register' element={<Register/>}/> */}

          <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<PrivateRoute><Dashoard/></PrivateRoute>}/>
          {/* <Route path='/dashboard' element={<PrivateRoute><Dashoard/></PrivateRoute>}/> */}
        </Routes>

      </BrowserRouter>

      </AuthProvider>

    </>
  )
}

export default App

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


          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>

      </BrowserRouter>

      </AuthProvider>

    </>
  )
}

export default App

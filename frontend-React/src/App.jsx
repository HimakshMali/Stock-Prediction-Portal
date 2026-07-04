import { useState } from 'react'
import './App.css'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Register from './components/Register'
import './assets/css/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

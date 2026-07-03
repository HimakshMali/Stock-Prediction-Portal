import { useState } from 'react'
import './App.css'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './assets/css/style.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Main />
      </main>
      <Footer />
    </div>

    </>
  )
}

export default App

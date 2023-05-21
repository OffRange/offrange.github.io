import Header from './components/Header'
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { Footer } from './components/Footer'
import './App.css'
import { PasswordManager } from './pages/products/PasswordManager'
import { Support } from './pages/Support'
import { Error404 } from './pages/404'
import { Home } from './pages/Home'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos'
import { LegalDisclosure } from './pages/LegalDisclosure'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    setTimeout(function () {
      Aos.init({ duration: 600, easing: "ease", once: true })
      console.log("INIT")
    }, 50)
  }, [pathname]);
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products'>
          <Route index path='*' element={<Navigate to="/products/passwordmanager" replace />} />
          <Route path='passwordmanager' element={<PasswordManager />} />
        </Route>
        <Route path='/support-me' element={<Support />} />
        <Route path='/legal-disclosure' element={<LegalDisclosure />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <div className="b-divider"></div>

      <Footer />
    </>
  )
}

export default App

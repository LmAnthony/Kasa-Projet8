import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import du style css
import './sass-styles/main.css'

// Import des pages
import Home from './pages/Home/index'
import AboutKasa from './pages/A-propos'
import Rental from './pages/Logement'
import Error from './components/Error'

// Import des composants
import Header from './components/Header'
import Footer from './components/Footer'

// Ma fonction router
function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/logement/:rentalId" element={<Rental />} />
          <Route path="/a-propos" element={<AboutKasa />} />
          {/* Composant de ma page d'erreur */}
          <Route path="/404" element={<Error />} />
          {/* ma page error 404 dans ma page d'accueil (si je modifie l'url, ça m'envoie sur /404) */}
          <Route path="*" element={<Navigate to="/404"/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter

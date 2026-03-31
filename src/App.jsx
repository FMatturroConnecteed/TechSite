import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MotorcycleDetailPage from './pages/MotorcycleDetailPage';
import NuoviArriviPage from './pages/NuoviArriviPage';
import PromozioniPage from './pages/PromozioniPage';
import ServiziPage from './pages/ServiziPage';
import FinanziamentoPage from './pages/FinanziamentoPage';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/motorcycle/:id" element={<MotorcycleDetailPage />} />
              <Route path="/nuovi-arrivi" element={<NuoviArriviPage />} />
              <Route path="/promozioni" element={<PromozioniPage />} />
              <Route path="/servizi" element={<ServiziPage />} />
              <Route path="/finanziamento" element={<FinanziamentoPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

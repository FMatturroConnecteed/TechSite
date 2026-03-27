import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import UserSection from './UserSection';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserSectionOpen, setIsUserSectionOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    setIsUserSectionOpen(false);
  };

  const toggleUserSection = () => {
    setIsUserSectionOpen(!isUserSectionOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-motor-black text-motor-white sticky top-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-motor-white rounded-lg flex items-center justify-center">
                <span className="text-motor-black font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-light tracking-wider">MotorShop</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/catalog" className="text-gray-300 hover:text-white transition-colors duration-200">
                Catalogo
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                Chi Siamo
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                Contatti
              </Link>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={toggleUserSection}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="text-sm">Benvenuto, {user?.name}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <UserSection 
                    isOpen={isUserSectionOpen} 
                    onClose={() => setIsUserSectionOpen(false)} 
                  />
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="bg-motor-white hover:bg-gray-200 text-motor-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Login
                </button>
              )}
            </div>
            
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link 
                  to="/" 
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/catalog" 
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Catalogo
                </Link>
                <Link 
                  to="/about" 
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Chi Siamo
                </Link>
                <Link 
                  to="/contact" 
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contatti
                </Link>
                <div className="border-t border-gray-800 pt-2 mt-2">
                  {isAuthenticated ? (
                    <>
                      <div className="px-3 py-2 text-gray-300 text-sm">
                        Benvenuto, {user?.name}
                      </div>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-3 py-2 text-red-400 hover:text-red-300 transition-colors duration-200"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        setIsLoginModalOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Login
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;

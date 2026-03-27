import { Link } from 'react-router-dom';

const Header = () => {
  return (
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
          
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

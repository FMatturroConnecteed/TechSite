import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-motor-black text-motor-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-motor-white rounded-lg flex items-center justify-center">
                <span className="text-motor-black font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-light tracking-wider">MotorShop</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Il tuo partner di fiducia per le migliori motociclette. 
              Qualità, passione e servizio eccellente dal 1985.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Link Veloci</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/nuovi-arrivi" className="text-gray-400 hover:text-white transition-colors">
                  Nuove Arrivi
                </Link>
              </li>
              <li>
                <Link to="/promozioni" className="text-gray-400 hover:text-white transition-colors">
                  Promozioni
                </Link>
              </li>
              <li>
                <Link to="/servizi" className="text-gray-400 hover:text-white transition-colors">
                  Servizi
                </Link>
              </li>
              <li>
                <Link to="/finanziamento" className="text-gray-400 hover:text-white transition-colors">
                  Finanziamento
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contatti</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Via Roma 123</li>
              <li>20100 Milano (MI)</li>
              <li>Tel: 02 12345678</li>
              <li>Email: info@motorshop.it</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MotorShop. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import { motorcycles } from '../data/motorcycles';
import MotorcycleCard from '../components/MotorcycleCard';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-motor-black to-motor-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">
            MotorShop
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            La tua passione per le due ruote incontra l'eccellenza italiana. 
            Scopri la nostra selezione esclusiva di motociclette.
          </p>
          <Link to="/catalog" className="btn-primary inline-block">
            Esplora il Catalogo
          </Link>
        </div>
      </section>

      <section className="py-16 bg-motor-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4">Le Nostre Moto</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Una selezione curata delle migliori motociclette, 
              dalle sportive alle adventure, dalle cruiser alle naked.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorcycles.map((motorcycle) => (
              <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

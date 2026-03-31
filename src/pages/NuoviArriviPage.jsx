import { useState, useEffect } from 'react';
import { motorcycles } from '../data/motorcycles';

const NuoviArriviPage = () => {
  const [latestMotorcycles, setLatestMotorcycles] = useState([]);

  useEffect(() => {
    // Simula le ultime moto arrivate (ultimi 3 ID)
    const latest = motorcycles
      .sort((a, b) => b.id - a.id)
      .slice(0, 3);
    setLatestMotorcycles(latest);
  }, []);

  return (
    <div className="min-h-screen bg-motor-light-gray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">Nuove Arrivi</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scopri le ultime novità nel mondo delle motociclette. 
            Le moto più attese e desiderate del momento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestMotorcycles.map((motorcycle) => (
            <div key={motorcycle.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  NUOVO
                </div>
                <img 
                  src={motorcycle.image} 
                  alt={motorcycle.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{motorcycle.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{motorcycle.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-motor-black">{motorcycle.price}</span>
                  <button className="btn-primary">
                    Scopri di più
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NuoviArriviPage;

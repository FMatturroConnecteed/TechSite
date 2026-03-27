import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motorcycles } from '../data/motorcycles';

const MotorcycleDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const motorcycle = motorcycles.find(m => m.id === parseInt(id));
  
  if (!motorcycle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Moto non trovata</h1>
          <Link to="/" className="btn-primary">
            Torna alla Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-motor-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-motor-black">Home</Link>
          <span>/</span>
          <span className="text-motor-black">{motorcycle.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-4">
              <img 
                src={motorcycle.images[selectedImage]} 
                alt={motorcycle.name}
                className="w-full h-96 object-cover"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {motorcycle.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index 
                      ? 'border-motor-black shadow-md' 
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${motorcycle.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-light mb-2">{motorcycle.name}</h1>
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                    {motorcycle.category}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-motor-black mb-2">
                    {motorcycle.price}
                  </div>
                  <button className="btn-primary">
                    Contatta Venditore
                  </button>
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {motorcycle.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Specifiche Tecniche</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(motorcycle.specs).map(([key, value]) => (
                    <div key={key} className="border border-gray-200 rounded-lg p-3">
                      <div className="text-sm text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="font-semibold text-motor-black">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Caratteristiche</h3>
                <ul className="space-y-2">
                  {motorcycle.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <button className="btn-primary flex-1">
                  Prenota Test Ride
                </button>
                <button className="btn-secondary flex-1">
                  Aggiungi ai Preferiti
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorcycleDetailPage;

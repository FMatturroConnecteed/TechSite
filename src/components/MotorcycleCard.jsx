import { Link } from 'react-router-dom';

const MotorcycleCard = ({ motorcycle }) => {
  return (
    <Link to={`/motorcycle/${motorcycle.id}`} className="block group">
      <div className="card hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div className="aspect-w-16 aspect-h-12 bg-gray-100">
          <img 
            src={motorcycle.image} 
            alt={motorcycle.name}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-motor-black group-hover:text-motor-gray transition-colors">
              {motorcycle.name}
            </h3>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
              {motorcycle.category}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {motorcycle.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-motor-black">
              {motorcycle.price}
            </span>
            <button className="btn-secondary text-sm">
              Dettagli
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MotorcycleCard;

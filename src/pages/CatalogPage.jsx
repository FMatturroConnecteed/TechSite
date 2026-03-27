import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motorcycles } from '../data/motorcycles';
import motorcycleBrands from '../data/motorcycleBrands.json';
import SearchBar from '../components/SearchBar';
import MotorcycleCard from '../components/MotorcycleCard';

const CatalogPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredMotorcycles, setFilteredMotorcycles] = useState(motorcycles);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');

  const searchTerm = searchParams.get('q') || '';

  const categories = ['all', ...new Set(motorcycles.map(m => m.category))];
  const brands = ['all', ...motorcycleBrands.brands.map(b => b.name)];

  useEffect(() => {
    let filtered = motorcycles;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(motorcycle => 
        motorcycle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        motorcycle.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        motorcycle.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(motorcycle => 
        motorcycle.category === selectedCategory
      );
    }

    // Filter by brand
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(motorcycle => 
        motorcycle.name.toLowerCase().startsWith(selectedBrand.toLowerCase())
      );
    }

    setFilteredMotorcycles(filtered);
  }, [searchTerm, selectedCategory, selectedBrand]);

  return (
    <div className="min-h-screen bg-motor-light-gray">
      <div className="bg-white border-b border-gray-200 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-light mb-2">Catalogo Moto</h1>
          <p className="text-gray-600">
            Esplora la nostra completa selezione di motociclette
          </p>
        </div>
      </div>

      <SearchBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 pb-6">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Filtri</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-motor-black focus:border-motor-black"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'Tutte le categorie' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Marca
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-motor-black focus:border-motor-black"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>
                      {brand === 'all' ? 'Tutte le marche' : brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedBrand('all');
                }}
                className="w-full btn-secondary text-sm"
              >
                Resetta Filtri
              </button>
            </div>

            {/* Brands Overview */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">
              <h3 className="text-lg font-semibold mb-4">Marche Disponibili</h3>
              <div className="space-y-2">
                {motorcycleBrands.brands.slice(0, 8).map(brand => (
                  <div key={brand.name} className="flex justify-between items-center py-1">
                    <span className="text-sm text-gray-700">{brand.name}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {brand.models.length} modelli
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">
                    {searchTerm && `Risultati per "${searchTerm}"`}
                    {!searchTerm && selectedCategory !== 'all' && `${selectedCategory}`}
                    {!searchTerm && selectedCategory === 'all' && selectedBrand !== 'all' && selectedBrand}
                    {!searchTerm && selectedCategory === 'all' && selectedBrand === 'all' && 'Tutte le moto'}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {filteredMotorcycles.length} {filteredMotorcycles.length === 1 ? 'moto trovata' : 'moto trovate'}
                  </p>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            {filteredMotorcycles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {filteredMotorcycles.map((motorcycle) => (
                  <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="w-8 h-8 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nessuna moto trovata
                </h3>
                <p className="text-gray-600 mb-6">
                  Prova a modificare i filtri di ricerca o la parola chiave
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedBrand('all');
                  }}
                  className="btn-primary"
                >
                  Resetta Ricerca
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;

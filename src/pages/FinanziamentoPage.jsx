import { useState } from 'react';

const FinanziamentoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    motorcycle: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui andrebbe la logica di invio del form
    alert('Richiesta di finanziamento inviata! Ti contatteremo entro 24 ore.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      motorcycle: '',
      budget: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-motor-light-gray py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">Finanziamento</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Realizza il sogno di possedere la moto che desideri. 
            Offriamo soluzioni di finanziamento personalizzate con tassi vantaggiosi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Calcola Rata</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Importo Totale
                </label>
                <input
                  type="number"
                  name="amount"
                  placeholder="es. 15000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-motor-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Anticipo (€)
                </label>
                <input
                  type="number"
                  name="downPayment"
                  placeholder="es. 3000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-motor-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durata (mesi)
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-motor-black">
                  <option value="12">12 mesi</option>
                  <option value="24">24 mesi</option>
                  <option value="36">36 mesi</option>
                  <option value="48">48 mesi</option>
                  <option value="60">60 mesi</option>
                </select>
              </div>
              <div className="mt-6 p-4 bg-motor-light-gray rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Rata Mensile:</span>
                  <span className="text-2xl font-bold text-motor-black">€450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">TAN:</span>
                  <span className="font-semibold">4.5%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Richiedi Preventivo</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-motor-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-motor-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-motor-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Moto di Interesse
                </label>
                <input
                  type="text"
                  name="motorcycle"
                  value={formData.motorcycle}
                  onChange={handleChange}
                  placeholder="es. Ducati Panigale V4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-motor-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Massimo
                </label>
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="es. 20000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-motor-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Messaggio
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Note aggiuntive..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-motor-black"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Invia Richiesta
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanziamentoPage;

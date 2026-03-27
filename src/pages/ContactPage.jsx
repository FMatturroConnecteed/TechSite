import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un\'email valida';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Il telefono è obbligatorio';
    } else if (!/^[0-9+\s-]+$/.test(formData.phone)) {
      newErrors.phone = 'Inserisci un numero di telefono valido';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'L\'oggetto è obbligatorio';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Il messaggio è obbligatorio';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Il messaggio deve contenere almeno 10 caratteri';
    }
    
    if (!formData.privacy) {
      newErrors.privacy = 'Devi accettare la privacy policy';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-motor-light-gray flex items-center justify-center">
        <div className="bg-white rounded-2xl p-12 max-w-md mx-auto text-center shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Messaggio Inviato!</h2>
          <p className="text-gray-600 mb-6">
            Ti risponderemo il prima possibile. Grazie per averci contattato!
          </p>
          <div className="text-sm text-gray-500">
            Verrai reindirizzato tra 3 secondi...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-motor-light-gray">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-motor-black to-motor-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">
            Contatti
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Siamo qui per aiutarti. Contattaci per qualsiasi domanda o per prenotare un test ride.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Informazioni</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-motor-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    Indirizzo
                  </h3>
                  <p className="text-gray-600">
                    Via Roma 123<br />
                    20100 Milano (MI)<br />
                    Italia
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-motor-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    Telefono
                  </h3>
                  <p className="text-gray-600">
                    +39 02 12345678<br />
                    Lun-Sab: 9:00-19:00<br />
                    Dom: Chiuso
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-motor-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    Email
                  </h3>
                  <p className="text-gray-600">
                    info@motorshop.it<br />
                    vendite@motorshop.it<br />
                    assistenza@motorshop.it
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-motor-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    Orari Test Ride
                  </h3>
                  <p className="text-gray-600">
                    Martedì e Giovedì<br />
                    10:00-12:00 / 15:00-17:00<br />
                    Su appuntamento
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-8 shadow-sm mt-6">
              <h2 className="text-2xl font-semibold mb-6">Azioni Veloci</h2>
              <div className="space-y-3">
                <button className="w-full btn-primary text-left">
                  📅 Prenota Test Ride
                </button>
                <button className="w-full btn-secondary text-left">
                  💰 Richiedi Finanziamento
                </button>
                <button className="w-full btn-secondary text-left">
                  🔧 Prenota Manutenzione
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Invia un Messaggio</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-motor-black transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Mario Rossi"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
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
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-motor-black transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="mario@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
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
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-motor-black transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+39 333 1234567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Oggetto *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-motor-black transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Seleziona un argomento</option>
                    <option value="vendita">Informazioni vendita</option>
                    <option value="test-ride">Prenotazione test ride</option>
                    <option value="finanziamento">Richiesta finanziamento</option>
                    <option value="assistenza">Assenza tecnica</option>
                    <option value="manutenzione">Prenotazione manutenzione</option>
                    <option value="altro">Altro</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-motor-black transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Scrivi qui il tuo messaggio..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <label className="text-sm text-gray-600">
                    Accetto la <a href="#" className="text-motor-black underline">privacy policy</a> e i <a href="#" className="text-motor-black underline">termini di servizio</a> *
                  </label>
                </div>
                {errors.privacy && (
                  <p className="text-red-500 text-sm">{errors.privacy}</p>
                )}

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: '',
                      message: '',
                      privacy: false
                    })}
                    className="btn-secondary flex-1"
                  >
                    Resetta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Dove Siamo</h2>
              <p className="text-gray-600 mb-6">
                Ti aspettiamo nella nostra showroom nel cuore di Milano per scoprire 
                la nostra selezione esclusiva di motociclette.
              </p>
            </div>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.4237324595!2d9.1903!3d45.4642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b7f0f0f0f0%3A0x0!2zMzXCsDI3JzU3LjIiTiA5wrAxMScyMC44IkE!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

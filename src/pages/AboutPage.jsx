const AboutPage = () => {
  return (
    <div className="min-h-screen bg-motor-light-gray">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-motor-black to-motor-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">
            Chi Siamo
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            La nostra passione per le due ruote diventa la tua avventura
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-light mb-6">La Nostra Storia</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                MotorShop nasce nel 1985 dalla passione di Marco Rossi, un pilota con un sogno: 
                condividere l'amore per le motociclette con altri appassionati. Quello che iniziò 
                come un piccolo officina a Milano è diventato oggi un punto di riferimento per 
                gli amanti delle due ruote in tutta Italia.
              </p>
              <p>
                Negli anni abbiamo ampliato la nostra offerta, passando da semplice officina 
                a concessionario ufficiale dei più prestigiosi marchi mondiali. La nostra filosofia 
                è rimasta la stessa: qualità, passione e servizio eccellente per ogni cliente.
              </p>
              <p>
                Oggi MotorShop è molto più di un concessionario: è una famiglia di appassionati 
                che vive e respira il mondo delle moto ogni giorno, pronta a consigliarti e 
                accompagnarti nella scelta della tua prossima avventura.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
              alt="MotorShop Store"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-center mb-12">I Nostri Valori</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-motor-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualità</h3>
              <p className="text-gray-600">
                Selezioniamo solo le migliori motociclette, garantendo standard elevati 
                di sicurezza e prestazioni per ogni cliente.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-motor-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Passione</h3>
              <p className="text-gray-600">
                Amiamo ciò che facciamo. Ogni moto che vendiamo è scelta da veri 
                appassionati per veri appassionati.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-motor-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Servizio</h3>
              <p className="text-gray-600">
                Offriamo assistenza completa, dalla scelta alla manutenzione, 
                per garantirti un'esperienza senza pensieri.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-center mb-12">Il Nostro Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                alt="Marco Rossi"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Marco Rossi</h3>
                <p className="text-gray-600 mb-3">Fondatore & CEO</p>
                <p className="text-sm text-gray-500">
                  35 anni di esperienza nel settore motociclistico
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                alt="Laura Bianchi"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Laura Bianchi</h3>
                <p className="text-gray-600 mb-3">Responsabile Vendite</p>
                <p className="text-sm text-gray-500">
                  Esperta di consulenza e finanza motociclistica
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Paolo Verdi"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Paolo Verdi</h3>
                <p className="text-gray-600 mb-3">Capo Officina</p>
                <p className="text-sm text-gray-500">
                  Specialista in tuning e preparazione sportiva
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-motor-black text-white rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">38</div>
              <div className="text-gray-300">Anni di Esperienza</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-gray-300">Clienti Soddisfatti</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">19</div>
              <div className="text-gray-300">Marche Premium</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Assistenza</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

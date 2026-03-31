import { useState } from 'react';

const ServiziPage = () => {
  const [services] = useState([
    {
      id: 1,
      title: "Manutenzione Programmatata",
      description: "Servizio di manutenzione completa con ricambi originali e garanzia estesa.",
      icon: "🔧",
      features: ["Controllo completo", "Ricambi originali", "Garanzia 24 mesi"]
    },
    {
      id: 2,
      title: "Assistenza Stradale",
      description: "Servizio di soccorso stradale 24/7 su tutto il territorio nazionale.",
      icon: "🚗",
      features: ["Intervento rapido", "Copertura nazionale", "Assistenza 24/7"]
    },
    {
      id: 3,
      title: "Test Ride Gratuita",
      description: "Prova la moto del tuo sogno con un test ride gratuito e senza impegno.",
      icon: "🏍️",
      features: ["30 minuti di prova", "Instructor professionale", "Percorso sicuro"]
    },
    {
      id: 4,
      title: "Finanziamento Personalizzato",
      description: "Soluzioni di finanziamento su misura con tassi vantaggiosi e approvazione rapida.",
      icon: "💳",
      features: ["Tassi competitivi", "Approvazione veloce", "Rate personalizzate"]
    },
    {
      id: 5,
      title: "Assicurazione Completa",
      description: "Polizze assicurative complete con copertura RCA e furto/incendio.",
      icon: "🛡️",
      features: ["RC Auto", "Furto/Incendio", "Assistenza legale"]
    },
    {
      id: 6,
      title: "Custom Shop",
      description: "Personalizza la tua moto con accessori originali e preparazioni ufficiali.",
      icon: "🎨",
      features: ["Accessori originali", "Preparazioni ufficiali", "Consulenza personalizzata"]
    }
  ]);

  return (
    <div className="min-h-screen bg-motor-light-gray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">I Nostri Servizi</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Offriamo un'assistenza completa per ogni tua esigenza. 
            Dalla manutenzione alla personalizzazione, siamo al tuo fianco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full btn-primary mt-6">
                Scopri di più
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiziPage;

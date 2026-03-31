import { useState } from 'react';

const PromozioniPage = () => {
  const [promotions] = useState([
    {
      id: 1,
      title: "Super Offerta Ducati",
      description: "Sconto del 15% su tutta la gamma Panigale",
      discount: "15%",
      validUntil: "31/12/2024",
      image: "https://images.ctfassets.net/x7j9qwvpvr5s/43adRuY33iuCayAyMy3wTw/5545b174f876fc95ffcfff3d643c4d23/Ducati-MY25-Panigale-V4-overview-carousel-hero-link-1600x650-01.jpg"
    },
    {
      id: 2,
      title: "Finanziamento BMW a Tasso Zero",
      description: "Acquista la tua BMW con finanziamento a tasso zero per 24 mesi",
      discount: "TASSO 0%",
      validUntil: "15/01/2025",
      image: "https://cdn.veloce.it/wp-content/uploads/webp/2023/05/bmw-1250-gs-ultimate-edition-4.webp"
    },
    {
      id: 3,
      title: "Kit Casco Omaggio",
      description: "Con l'acquisto di una moto Kawasaki ricevi un casco omaggio",
      discount: "CASCO +",
      validUntil: "30/11/2024",
      image: "https://www.kawasaki.it/content/dam/products/pim/studio/Resource_324964_26ZX1003A_40TGN1DRF3CG_A.jpg/_jcr_content/renditions/cq5dam.thumbnail.600.600.png"
    }
  ]);

  return (
    <div className="min-h-screen bg-motor-light-gray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">Promozioni Esclusive</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Approfitta delle offerte imperdibili sulle migliori motociclette. 
            Le promozioni sono a tempo limitato, non fartele scappare!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div key={promo.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {promo.discount}
                </div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  FINO AL {promo.validUntil}
                </div>
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <button className="w-full btn-primary">
                  Approfitta Offerta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromozioniPage;

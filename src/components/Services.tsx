export default function Services() {
  const services = [
    {
      id: 'architectural-design',
      title: 'Mimari Tasarım',
      description: 'Konsept geliştirmeden detaylı tasarım dokümantasyonuna kadar kapsamlı mimari hizmetler.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
    },
    {
      id: 'interior-design',
      title: 'İç Mekan Tasarımı',
      description: 'Estetik, işlevsellik ve müşteri ihtiyaçlarını dengeleyen düşünceli iç mekanlar.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
    },
    {
      id: 'urban-planning',
      title: 'Kentsel Planlama',
      description: 'Topluluklar, mahalleler ve kentsel gelişmeler için stratejik planlama.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      ),
    },
    {
      id: 'sustainable-design',
      title: 'Sürdürülebilir Tasarım',
      description: 'Çevresel etkiyi en aza indiren ve enerji verimliliğini en üst düzeye çıkaran çevre dostu çözümler.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      ),
    },
    {
      id: 'renovation',
      title: 'Yenileme ve Restorasyon',
      description: 'Mevcut yapıların tarihi ve mimari bütünlüğüne saygı gösterirken onlara yeni bir yaşam kazandırmak.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10"></polyline>
          <polyline points="1 20 1 14 7 14"></polyline>
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
        </svg>
      ),
    },
    {
      id: 'visualization',
      title: '3D Görselleştirme',
      description: 'Müşterilerin projelerini inşaat öncesinde görselleştirmelerine yardımcı olan fotorealistik görüntüler ve sanal gezintiler.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="21.17" y1="8" x2="12" y2="8"></line>
          <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
          <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Hizmetlerimiz</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Her müşterinin ve projenin benzersiz ihtiyaçlarını karşılamak için özel olarak tasarlanmış kapsamlı mimari hizmetler sunuyoruz. 
            Uzmanlığımız, ilk konsept geliştirmeden nihai inşaat denetimine kadar uzanır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-muted p-6 rounded-lg transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <div className="text-primary">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 border border-primary/10 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Tasarım Sürecimiz</h3>
            <p className="text-secondary max-w-2xl mx-auto">
              Fikirlerin kapsamlı bir şekilde keşfedilmesini, müşteri katılımını ve her aşamada detaylara dikkat edilmesini 
              sağlayan yapılandırılmış ancak esnek bir tasarım süreci izliyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">01</span>
              </div>
              <h4 className="font-semibold mb-2">Keşif</h4>
              <p className="text-secondary text-sm">
                Müşteri ihtiyaçlarını anlama, alan analizi ve proje gereksinimleri
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">02</span>
              </div>
              <h4 className="font-semibold mb-2">Konsept Tasarım</h4>
              <p className="text-secondary text-sm">
                Fikirleri keşfetme, ön tasarımlar geliştirme ve ilk görselleştirmeleri oluşturma
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">03</span>
              </div>
              <h4 className="font-semibold mb-2">Geliştirme</h4>
              <p className="text-secondary text-sm">
                Tasarımları iyileştirme, detaylı planlar oluşturma ve malzeme ve bitişleri seçme
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">04</span>
              </div>
              <h4 className="font-semibold mb-2">Teslimat</h4>
              <p className="text-secondary text-sm">
                İnşaat dokümantasyonu, izin alma ve proje gerçekleştirme
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
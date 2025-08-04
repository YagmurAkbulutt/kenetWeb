import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6 text-balance">
            Sürdürülebilir Bir Gelecek İçin Yenilikçi Mimari
          </h1>
          <p className="text-white/90 text-xl mb-8 max-w-2xl">
            İlham veren, mükemmel işleyen ve çevreye saygılı alanlar yaratıyoruz. 
            Tasarımlarımız, gerçekten olağanüstü sonuçlar için estetiği pratiklikle birleştirir.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/#projects" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md transition-colors font-medium"
            >
              Çalışmalarımızı Görün
            </Link>
            <Link 
              href="/#contact" 
              className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md transition-colors font-medium"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/80 text-sm mb-2">Keşfetmek için kaydırın</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="rgba(255,255,255,0.8)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
}
import React from 'react';
import Image from 'next/image';

export default function DesignImplementation() {
  return (
    <section id="design-implementation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Tasarım Uygulama</h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg mb-6">
            Kenet Mimarlık olarak, olağanüstü tasarımın ancak uygulaması kadar iyi olduğuna inanıyoruz. 
            Kapsamlı yaklaşımımız, her projenin konseptten gerçeğe sorunsuz bir şekilde geçmesini sağlar, 
            tüm süreç boyunca tasarım bütünlüğünü korur.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-80 bg-muted rounded-lg overflow-hidden">
            <Image 
              src="/projects/project1.jpg" 
              alt="Design Implementation Process" 
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Uygulama Metodolojimiz</h3>
            <p className="mb-4">
              İnşaat, bütçe ve zaman çizelgesi gibi pratik hususları ele alırken tasarım amacının korunmasını sağlayan yapılandırılmış bir metodoloji izliyoruz. Sürecimiz şunları içerir:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Detaylı Dokümantasyon:</strong> Tasarım amacını yüklenicilere ve danışmanlara açıkça ileten kapsamlı inşaat belgeleri.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Malzeme Özellikleri:</strong> Tasarım hedefleri ve performans gereksinimleriyle uyumlu malzemelerin, yüzeylerin ve sistemlerin dikkatli seçimi ve belgelendirilmesi.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Koordinasyon:</strong> Tüm unsurların uyum içinde çalışmasını sağlamak için mimari, yapısal, mekanik, elektrik ve tesisat sistemlerinin entegrasyonu.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>İnşaat Yönetimi:</strong> İnşaatın tasarım özelliklerine uygun olmasını sağlamak için düzenli saha ziyaretleri ve kalite kontrol.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Tasarımdan İnşaata İş Akışı</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">01</span>
              </div>
              <h4 className="font-semibold mb-2">Tasarım Geliştirme</h4>
              <p className="text-sm text-secondary">
                Kavramsal tasarımları belirli boyutlar, malzemeler ve sistemlerle detaylı planlara dönüştürme.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">02</span>
              </div>
              <h4 className="font-semibold mb-2">İnşaat Dokümantasyonu</h4>
              <p className="text-sm text-secondary">
                İnşaatçılar ve yükleniciler için kapsamlı çizimler, özellikler ve teknik detaylar oluşturma.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">03</span>
              </div>
              <h4 className="font-semibold mb-2">Teklif & Müzakere</h4>
              <p className="text-sm text-secondary">
                Müşterilere nitelikli yüklenicileri seçme ve doğru maliyet tahmini sağlama konusunda yardımcı olma.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">04</span>
              </div>
              <h4 className="font-semibold mb-2">İnşaat Yönetimi</h4>
              <p className="text-sm text-secondary">
                Tasarım amacına uygunluğu sağlamak ve saha sorunlarını çözmek için inşaatı denetleme.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4">Kalite Güvencesi</h4>
            <p className="text-secondary">
              Titiz kalite güvence protokollerimiz, uygulamanın her yönünün yüksek standartlarımızı karşılamasını sağlar. Projenin önemli aşamalarında düzenli incelemeler yapar ve tüm kararların ve değişikliklerin ayrıntılı belgelerini tutarız.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4">Teknoloji Entegrasyonu</h4>
            <p className="text-secondary">
              Uygulama sırasında koordinasyonu geliştirmek ve hataları en aza indirmek için Bina Bilgi Modellemesi (BIM), sanal gerçeklik görselleştirmesi ve dijital işbirliği araçları dahil olmak üzere gelişmiş teknolojilerden yararlanıyoruz.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4">Sürdürülebilir Uygulama</h4>
            <p className="text-secondary">
              Sürdürülebilirlik hedefleriyle uyumlu malzemeleri, sistemleri ve inşaat yöntemlerini dikkatle seçerek, yeşil tasarım konseptlerinin maksimum çevresel fayda için uygun şekilde uygulanmasını sağlıyoruz.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Mükemmelliğe Olan Bağlılığımız</h3>
          <p className="text-lg max-w-3xl mx-auto">
            İlk eskizden son incelemeye kadar, detaylara sarsılmaz bir dikkat ve müşterilerimizin vizyonunu gerçekleştirme taahhüdümüzü sürdürüyoruz. Tasarım uygulamasına yönelik pratik yaklaşımımız, tamamlanan projenin beklentileri karşılamasını ve hatta aşmasını sağlar.
          </p>
        </div>
      </div>
    </section>
  );
}
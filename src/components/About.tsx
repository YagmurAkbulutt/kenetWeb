import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Kenet Mimarlık Hakkında</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg mb-6">
              Kenet Mimarlık, ilham veren, güzel işleyen ve zamana meydan okuyan alanlar yaratmaya adanmış ilerici bir tasarım stüdyosudur. Yenilikçilik, sürdürülebilirlik ve müşteri işbirliği ilkeleri üzerine kurulmuş olan stüdyomuz, her projeye taze bir bakış açısı getiriyor.
            </p>
            <p className="text-lg mb-6">
              Mimarlardan ve tasarımcılardan oluşan çeşitli ekibimiz, konut, ticari, kültürel ve kentsel projeler genelinde onlarca yıllık birleşik deneyimi bir araya getiriyor. Olağanüstü mimarinin, insanları, mekanı ve amacı derinlemesine anlamaktan doğduğuna inanıyoruz.
            </p>
            <p className="text-lg">
              Konseptten tamamlanmaya kadar, müşterilerimizle yakın işbirliği içinde çalışarak vizyonlarını gerçeğe dönüştürüyor, beklentileri aşan ve yaşamları zenginleştiren alanlar yaratıyoruz.
            </p>
          </div>
          <div className="relative h-80 bg-muted rounded-lg overflow-hidden">
            <Image 
                src="/hero-bg.jpg" 
                alt="Kenet Mimarlık Stüdyosu" 
                fill 
                className="object-cover"
              />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">120+</div>
            <div className="text-lg">Tamamlanan Proje</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15</div>
            <div className="text-lg">Yıllık Deneyim</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">25</div>
            <div className="text-lg">Ekip Üyesi</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">18</div>
            <div className="text-lg">Tasarım Ödülü</div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-8 text-center">Ekibimiz</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="/team/team1.jpg" 
                alt="John Smith" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h4 className="text-xl font-bold">John Smith</h4>
              <p className="text-muted-foreground">Baş Mimar</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="/team/team2.jpg" 
                alt="Sarah Johnson" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h4 className="text-xl font-bold">Sarah Johnson</h4>
              <p className="text-muted-foreground">Tasarım Direktörü</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="/team/team3.jpg" 
                alt="Michael Chen" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h4 className="text-xl font-bold">Michael Chen</h4>
              <p className="text-muted-foreground">Sürdürülebilirlik Lideri</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="/team/team4.jpg" 
                alt="Olivia Rodriguez" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h4 className="text-xl font-bold">Olivia Rodriguez</h4>
              <p className="text-muted-foreground">İç Tasarım Lideri</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-8 text-center">Temel Değerlerimiz</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4">Sürdürülebilirlik</h4>
            <p>
              Konforu ve verimliliği en üst düzeye çıkarırken ekolojik etkiyi en aza indiren çevreye duyarlı tasarıma bağlıyız. Her proje, bağlamına ve müşteri ihtiyaçlarına uygun sürdürülebilir stratejileri entegre eder.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4">Yenilikçilik</h4>
            <p>
              Mimaride mümkün olanın sınırlarını zorlamak için sürekli olarak yeni fikirler, teknolojiler ve yaklaşımlar keşfediyoruz. Tasarımlarımız, hem güzel hem de işlevsel alanlar yaratmak için yaratıcı vizyonu pratik çözümlerle dengeler.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4">İşbirliği</h4>
            <p>
              En iyi sonuçların açık diyalog ve ortaklıktan geldiğine inanıyoruz. Tasarımlarımızın kolektif bilgeliği yansıtmasını ve çeşitli ihtiyaçlara düşünceli bir şekilde yanıt vermesini sağlamak için müşteriler, danışmanlar ve topluluklarla yakın çalışıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
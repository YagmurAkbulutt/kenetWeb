import React from 'react';

export default function Licensing() {
  return (
    <section id="licensing" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Lisans Bilgileri</h2>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Yazılım Lisansları</h3>
            <p className="mb-4">
              Kenet Mimarlık, tasarım sürecimizde çeşitli yazılım araçları ve teknolojileri kullanmaktadır. 
              Projelerimizde kullanılan tüm yazılımlar ticari kullanım için uygun şekilde lisanslanmıştır, bunlar arasında:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Autodesk Suite (AutoCAD, Revit, 3ds Max) - Commercial License</li>
              <li>Adobe Creative Cloud (Photoshop, Illustrator, InDesign) - Enterprise License</li>
              <li>SketchUp Pro - Professional License</li>
              <li>V-Ray Rendering Engine - Commercial License</li>
              <li>Lumion - Professional License</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Görsel ve İçerik Lisansları</h3>
            <p className="mb-4">
              Web sitemizde ve sunumlarımızda kullanılan tüm görseller, grafikler ve görsel içerikler şu şekildedir:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kenet Mimarlık tarafından oluşturulan orijinal çalışmalar</li>
              <li>Premium stok fotoğraf hizmetleri aracılığıyla lisanslanmış içerikler</li>
              <li>Telif hakkı sahiplerinden açık izinle kullanılan içerikler</li>
              <li>İlgili lisanslarına uygun olarak kullanılan açık kaynaklı içerikler</li>
            </ul>
            <p className="mt-4">
              Fikri mülkiyet haklarına saygı duyuyor ve lisans koşullarının gerektirdiği durumlarda tüm görsel içeriklerin uygun şekilde atıfta bulunulmasını sağlıyoruz.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Proje Lisansları</h3>
            <p className="mb-4">
              Kenet Mimarlık tarafından oluşturulan mimari tasarımlar, planlar ve şartnameler, hizmet sözleşmelerimizde belirtilen koşullara göre müşterilerimize lisanslanmaktadır. Genellikle lisans koşullarımız şunları içerir:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tasarımı belirli bir proje ve konum için kullanma hakkı</li>
              <li>Fiziksel çizimler ve belgelerin mülkiyeti</li>
              <li>İzin olmadan yeniden kullanım, çoğaltma veya değiştirme kısıtlamaları</li>
              <li>Yayınlanan veya sergilenen çalışmalar için atıf gereksinimleri</li>
            </ul>
            <p className="mt-4">
              Belirli projeler için lisans koşulları hakkında detaylı bilgi almak için lütfen doğrudan ofisimizle iletişime geçin.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Telif Hakkı Bildirimi</h3>
            <p>
              © {new Date().getFullYear()} Kenet Mimarlık. Tüm hakları saklıdır. Bu web sitesinde sunulan içerik, tasarımlar, görseller ve materyaller telif hakkı yasası ile korunmaktadır ve Kenet Mimarlık'tan önceden yazılı izin alınmadan çoğaltılamaz, dağıtılamaz veya kullanılamaz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
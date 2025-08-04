'use client';

import { useState } from 'react';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Modern Living Co.',
    quote: 'Kenet Mimarlık vizyonumuzu gerçeğe dönüştürdü. Sürdürülebilir tasarıma yönelik yenilikçi yaklaşımları sadece estetik hedeflerimizi karşılamakla kalmadı, aynı zamanda enerji maliyetlerimizi de önemli ölçüde azalttı.',
    imageUrl: '/testimonials/person1.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Emlak Geliştirici',
    company: 'Urban Spaces',
    quote: 'Kenet ekibiyle çalışmak, konseptten tamamlanmaya kadar sorunsuz bir deneyimdi. Detaylara gösterdikleri dikkat ve mükemmelliğe olan bağlılıkları, projemizin her yönünde açıkça görülüyor.',
    imageUrl: '/testimonials/person2.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Direktör',
    company: 'City Arts Center',
    quote: 'Kenet tarafından tasarlanan kültür merkezi, topluluğumuzda bir simge haline geldi. İhtiyaçlarımızı dinlediler ve hem işlevsel hem de ilham verici bir alan yarattılar.',
    imageUrl: '/testimonials/person3.jpg',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Müşterilerimiz Ne Diyor</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Müşteri ilişkilerimiz ve tamamladığımız başarılı projelerle gurur duyuyoruz. 
            İşte bazı müşterilerimizin Kenet Mimarlık ile çalışma hakkında söyledikleri.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-muted rounded-lg p-8 md:p-12 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center border-4 border-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5"></path>
                  <path d="M19 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5"></path>
                </svg>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg md:text-xl italic mb-8">
                {testimonials[activeIndex].quote}
              </p>

              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 overflow-hidden mr-4">
                  {/* Placeholder for when images are not available */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-primary font-medium">{testimonials[activeIndex].name.charAt(0)}</span>
                  </div>
                  {/* Uncomment when you have actual images */}
                  {/* 
                  <Image 
                    src={testimonials[activeIndex].imageUrl} 
                    alt={testimonials[activeIndex].name} 
                    width={64} 
                    height={64} 
                    className="object-cover"
                  /> 
                  */}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
                  <p className="text-secondary text-sm">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Önceki referans"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Sonraki referans"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${index === activeIndex ? 'bg-primary' : 'bg-border'}`}
                aria-label={`${index + 1} numaralı referansa git`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
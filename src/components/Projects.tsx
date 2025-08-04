import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: number;
};

const projects: Project[] = [
  {
    id: 'modern-residence',
    title: 'Modern Konut',
    category: 'Konut',
    description: 'Sürdürülebilir malzemeler ve enerji verimliliği göz önünde bulundurularak tasarlanmış çağdaş bir ev.',
    imageUrl: '/projects/project1.jpg',
    year: 2023,
  },
  {
    id: 'urban-office',
    title: 'Kentsel Ofis Kompleksi',
    category: 'Ticari',
    description: 'Şehrin kalbinde işbirliğini ve üretkenliği teşvik eden dinamik bir çalışma alanı.',
    imageUrl: '/projects/project2.jpg',
    year: 2022,
  },
  {
    id: 'cultural-center',
    title: 'Kültür Sanat Merkezi',
    category: 'Kamu',
    description: 'Sergiler, performanslar ve topluluk buluşmaları için çok yönlü bir alan.',
    imageUrl: '/projects/project3.jpg',
    year: 2021,
  },
  {
    id: 'eco-retreat',
    title: 'Eko Tatil Köyü',
    category: 'Konaklama',
    description: 'Doğal çevresiyle kusursuz bir şekilde bütünleşen sürdürülebilir bir tatil tesisi.',
    imageUrl: '/projects/project4.jpg',
    year: 2023,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Öne Çıkan Projeler</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Konut, ticari ve kamusal alanları kapsayan yenilikçi mimari tasarımlardan oluşan 
            portföyümüzü keşfedin. Her proje, sürdürülebilirlik, işlevsellik ve estetik 
            mükemmelliğe olan bağlılığımızı yansıtır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card bg-background rounded-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3>{project.title}</h3>
                  <span className="text-sm text-secondary">{project.year}</span>
                </div>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                  {project.category}
                </span>
                <p className="text-secondary mb-4">{project.description}</p>
                <Link 
                  href={`/projects/${project.id}`} 
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center transition-colors"
                >
                  Projeyi Görüntüle
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/projects" 
            className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md transition-colors font-medium"
          >
            Tüm Projeleri Görüntüle
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
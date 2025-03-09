import Image from 'next/image';
import Button from '@/components/Button';

// JSON-LD structured data for portfolio
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Tech Lumina Project Portfolio',
  description: 'Showcase of successful web development projects by Tech Lumina across various industries.',
  provider: {
    '@type': 'Organization',
    name: 'Tech Lumina',
    url: 'https://techlumina.com'
  },
  about: {
    '@type': 'Thing',
    name: 'Web Development Projects',
    description: 'Collection of web development projects including e-commerce, healthcare, real estate, education, finance, and logistics solutions.'
  }
};

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory management and secure payment processing.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'E-Commerce'
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare platform for managing patient records and appointments.',
      tech: ['React', 'Express', 'PostgreSQL', 'WebRTC'],
      category: 'Healthcare'
    },
    {
      title: 'Real Estate Portal',
      description: 'Advanced property listing and management system with virtual tour capabilities.',
      tech: ['Vue.js', 'Django', 'Redis', 'AWS'],
      category: 'Real Estate'
    },
    {
      title: 'Learning Management System',
      description: 'Interactive educational platform with live classes and progress tracking.',
      tech: ['React', 'Firebase', 'Node.js', 'WebSocket'],
      category: 'Education'
    },
    {
      title: 'Financial Dashboard',
      description: 'Real-time financial data visualization and analysis platform.',
      tech: ['Angular', 'Python', 'TensorFlow', 'D3.js'],
      category: 'Finance'
    },
    {
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain tracking and optimization system.',
      tech: ['React', 'GraphQL', 'PostgreSQL', 'Docker'],
      category: 'Logistics'
    }
  ];

  // Create structured data for projects
  const projectsData = projects.map(project => ({
    '@type': 'WebApplication',
    name: project.title,
    description: project.description,
    applicationCategory: project.category,
    operatingSystem: 'Web-based',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock'
    },
    provider: {
      '@type': 'Organization',
      name: 'Tech Lumina'
    }
  }));

  const portfolioJsonLd = {
    ...jsonLd,
    mainEntity: projectsData
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <div className="min-h-screen" itemScope itemType="https://schema.org/CollectionPage">
      {/* Projects Hero Section */}
      <section className="relative py-24 px-4 md:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-light-gray" itemProp="headline">Our Projects</h1>
          <p className="text-xl text-light-gray/80 text-center mb-12 max-w-3xl mx-auto" itemProp="description">
            Explore our portfolio of successful projects where we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-4 md:px-8 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="card group hover:transform hover:scale-105 transition-all duration-300"
                itemScope
                itemType="https://schema.org/WebApplication"
                itemProp="hasPart"
              >
                <div className="h-48 relative mb-6 rounded-lg overflow-hidden bg-navy">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy via-medium-blue/20 to-navy group-hover:opacity-50 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-light-gray text-5xl opacity-20 group-hover:opacity-40 transition-opacity">
                      {project.category[0]}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-navy" itemProp="name">{project.title}</h3>
                <p className="text-blue-gray mb-4" itemProp="description">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full bg-navy/10 text-medium-blue text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-4 md:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-light-gray">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-medium-blue/10 p-6 rounded-lg text-center backdrop-blur-sm border border-medium-blue/20">
              <h3 className="text-xl font-semibold mb-2 text-light-gray">Frontend</h3>
              <p className="text-light-gray/80">React, Vue, Angular, Next.js</p>
            </div>
            <div className="bg-medium-blue/10 p-6 rounded-lg text-center backdrop-blur-sm border border-medium-blue/20">
              <h3 className="text-xl font-semibold mb-2 text-light-gray">Backend</h3>
              <p className="text-light-gray/80">Node.js, Python, Java, Go</p>
            </div>
            <div className="bg-medium-blue/10 p-6 rounded-lg text-center backdrop-blur-sm border border-medium-blue/20">
              <h3 className="text-xl font-semibold mb-2 text-light-gray">Database</h3>
              <p className="text-light-gray/80">MongoDB, PostgreSQL, Redis</p>
            </div>
            <div className="bg-medium-blue/10 p-6 rounded-lg text-center backdrop-blur-sm border border-medium-blue/20">
              <h3 className="text-xl font-semibold mb-2 text-light-gray">Cloud</h3>
              <p className="text-light-gray/80">AWS, GCP, Azure, Vercel</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-navy">Have a Project in Mind?</h2>
          <p className="text-xl text-blue-gray mb-8">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <Button variant="light" href="/contact">
            Start a Project
          </Button>
        </div>
      </section>
      </div>
    </>
  );
}

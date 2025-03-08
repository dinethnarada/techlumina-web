import Image from 'next/image';

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

  return (
    <div className="min-h-screen">
      {/* Projects Hero Section */}
      <section className="relative py-20 px-6 sm:px-8 md:px-12 bg-navy">
        <div className="max-w-7xl mx-auto">
          <h1 className="section-title text-center text-light-gray !text-light-gray">Our Projects</h1>
          <p className="text-xl text-light-gray/80 text-center mb-12 max-w-3xl mx-auto">
            Explore our portfolio of successful projects where we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 sm:px-8 md:px-12 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card group hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-48 relative mb-6 rounded-lg overflow-hidden bg-navy">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy via-medium-blue/20 to-navy group-hover:opacity-50 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-light-gray text-5xl opacity-20 group-hover:opacity-40 transition-opacity">
                      {project.category[0]}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-navy">{project.title}</h3>
                <p className="text-blue-gray mb-4">{project.description}</p>
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
      <section className="py-20 px-4 bg-navy">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center text-light-gray !text-light-gray">Technologies We Use</h2>
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
      <section className="py-20 px-6 sm:px-8 md:px-12 bg-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Have a Project in Mind?</h2>
          <p className="text-xl text-blue-gray mb-8">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <a href="/contact" className="button">
            Start a Project
          </a>
        </div>
      </section>
    </div>
  );
}

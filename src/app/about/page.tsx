export default function About() {
  return (
    <div className="min-h-screen">
      {/* About Hero Section */}
      <section className="relative py-20 px-6 sm:px-8 md:px-12 bg-navy">
        <div className="max-w-7xl mx-auto">
          <h1 className="section-title text-center text-light-gray !text-light-gray">About Tech Lumina</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-light-gray/80 mb-6">
                Tech Lumina is a forward-thinking web development company dedicated to creating powerful, scalable, and innovative web applications. Our mission is to transform your digital ideas into reality through cutting-edge technology and exceptional design.
              </p>
              <p className="text-lg text-light-gray/80">
                With a team of experienced developers and designers, we specialize in delivering custom web solutions that help businesses thrive in the digital age.
              </p>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden bg-medium-blue/10">
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-medium-blue/20 to-navy"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-medium-blue/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 sm:px-8 md:px-12 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-navy">Innovation</h3>
              <p className="text-blue-gray">
                We stay at the forefront of technology, constantly exploring new solutions to deliver the best results.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-navy">Excellence</h3>
              <p className="text-blue-gray">
                We strive for excellence in every project, ensuring the highest quality in our deliverables.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-navy">Partnership</h3>
              <p className="text-blue-gray">
                We build long-lasting relationships with our clients, working together to achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 sm:px-8 md:px-12 bg-navy">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center text-light-gray !text-light-gray">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-navy">Discovery & Planning</h3>
              <p className="text-blue-gray mb-4">
                We begin each project with a thorough understanding of your needs and objectives. Our team works closely with you to develop a comprehensive plan that aligns with your goals.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-navy">Design & Development</h3>
              <p className="text-blue-gray mb-4">
                Our expert team combines creative design with robust development practices to create solutions that are both beautiful and functional.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-navy">Testing & Deployment</h3>
              <p className="text-blue-gray mb-4">
                We rigorously test all applications to ensure they meet our high standards of quality and performance before deployment.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-navy">Support & Maintenance</h3>
              <p className="text-blue-gray mb-4">
                Our commitment doesn't end at launch. We provide ongoing support and maintenance to ensure your application continues to perform optimally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8 md:px-12 bg-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-gray mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <a href="/contact" className="button">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

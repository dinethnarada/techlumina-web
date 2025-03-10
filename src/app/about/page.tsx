'use client';

import ValueCard from '@/components/ValueCard';
import ApproachCard from '@/components/ApproachCard';
import Button from '@/components/Button';
import GlassImage from '@/components/GlassImage';
import { FaLightbulb, FaStar, FaHandshake, FaSearch, FaPencilRuler, FaCheckCircle, FaTools } from 'react-icons/fa';

export default function About() {
  return (
    <main className="min-h-screen bg-navy">
      {/* About Hero Section */}
      <section className="relative py-24 px-4 md:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-light-gray">About Tech Lumina</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <p className="text-lg text-light-gray/80 mb-6">
                Tech Lumina is a forward-thinking web development company dedicated to creating powerful, scalable, and innovative web applications. Our mission is to transform your digital ideas into reality through cutting-edge technology and exceptional design.
              </p>
              <p className="text-lg text-light-gray/80">
                With a team of experienced developers and designers, we specialize in delivering custom web solutions that help businesses thrive in the digital age.
              </p>
            </div>
            <div className="h-[300px]">
              <GlassImage
                src="/images/about-tech-lumina.jpg"
                alt="Tech Lumina's innovative workspace"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 md:px-8 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-navy">Our Values</h2>
            <p className="text-xl text-blue-gray max-w-2xl mx-auto">
              Guided by principles that drive innovation and excellence
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <ValueCard
                icon={<FaLightbulb className="w-full h-full" />}
                title="Innovation"
                description="We stay at the forefront of technology, constantly exploring new solutions to deliver the best results."
              />
              <ValueCard
                icon={<FaStar className="w-full h-full" />}
                title="Excellence"
                description="We strive for excellence in every project, ensuring the highest quality in our deliverables."
              />
              <ValueCard
                icon={<FaHandshake className="w-full h-full" />}
                title="Partnership"
                description="We build long-lasting relationships with our clients, working together to achieve their goals."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 px-4 md:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-light-gray">Our Approach</h2>
            <p className="text-xl text-light-gray/80 max-w-2xl mx-auto">
              A systematic process that ensures success in every project
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <ApproachCard
                icon={<FaSearch className="w-full h-full" />}
                title="Discovery & Planning"
                description="We begin each project with a thorough understanding of your needs and objectives. Our team works closely with you to develop a comprehensive plan that aligns with your goals."
              />
              <ApproachCard
                icon={<FaPencilRuler className="w-full h-full" />}
                title="Design & Development"
                description="Our expert team combines creative design with robust development practices to create solutions that are both beautiful and functional."
              />
              <ApproachCard
                icon={<FaCheckCircle className="w-full h-full" />}
                title="Testing & Deployment"
                description="We rigorously test all applications to ensure they meet our high standards of quality and performance before deployment."
              />
              <ApproachCard
                icon={<FaTools className="w-full h-full" />}
                title="Support & Maintenance"
                description="Our commitment doesn't end at launch. We provide ongoing support and maintenance to ensure your application continues to perform optimally."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-navy">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-gray mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Button variant="light" href="/contact">
            Get in Touch
          </Button>
        </div>
      </section>
    </main>
  );
}

'use client';

import ValueCard from '@/components/ValueCard';
import ApproachCard from '@/components/ApproachCard';
import Button from '@/components/Button';
import GlassImage from '@/components/GlassImage';
import TeamMemberCard from '@/components/TeamMemberCard';
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
                We are a bunch of innovative and creative minds dedicated to designing and developing scalable, durable web solutions bespoked to meet the your unique demands. We bring your dream of stepping into the digital world a reality through bleeding-edge technologies and exceptional design.
              </p>
              <p className="text-lg text-light-gray/80">
              We are ready to take on the responsibility of driving large-scale digital transformation for your business. We can cater to meeting your budget and timeline requirements. Our out-of-the-box thinking, combined with expertise across all tiers of web application development—including, but not limited to, architectural design, front-end, and back-end implementation—guarantees an enterprise-grade solution.
              </p>
            </div>
            <div className="h-[300px]">
              <GlassImage
                src="/images/web-development-team.jpg"
                alt="Tech Lumina's collaborative development workspace"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-4 md:px-8 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-navy">Who We Are</h2>
            <p className="text-xl text-blue-gray max-w-2xl mx-auto">
              Meet our team of dedicated professionals
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <TeamMemberCard
                name="Yasiru Rathnayaka"
                title="Associate Technical Lead at Sysco Labs (Pvt) Ltd"
                imageSrc="/images/yasiru.jpg"
                linkedinUrl="https://www.linkedin.com/in/yasiru-rathnayaka/"
                imagePosition="down"
              />
              <TeamMemberCard
                name="Thisun Dayarathna"
                title="Senior Software Engineer at Sysco Labs (Pvt) Ltd"
                imageSrc="/images/thisun.jpg"
                linkedinUrl="https://www.linkedin.com/in/thisundayarathna/"
              />
              <TeamMemberCard
                name="Savindu Ekanayake"
                title="Senior Software Engineer at Sysco Lab (Pvt) Ltds"
                imageSrc="/images/savindu.jpg"
                linkedinUrl="https://www.linkedin.com/in/savinduekanayake/"
              />
              <TeamMemberCard
                name="Dineth Athapaththu"
                title="Senior Software Engineer at Sysco Labs (Pvt) Ltd"
                imageSrc="/images/dineth.jpg"
                linkedinUrl="https://www.linkedin.com/in/dineth-athapaththu/"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 md:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-light-gray">Our Values</h2>
            <p className="text-xl text-light-gray/80 max-w-2xl mx-auto">
              Guided by principles that drive innovation and excellence
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueCard
                icon={<FaLightbulb className="w-full h-full" />}
                title="Innovation"
                description="We thrive to keep the technology used at Tech Lumina upto date while utilising modern best practices and solutions."
              />
              <ValueCard
                icon={<FaStar className="w-full h-full" />}
                title="Excellence"
                description="Excellence is the key at Tech Lumina. We ensure that every project we deliver meets your business, budget, and timeline requirements."
              />
              <ValueCard
                icon={<FaHandshake className="w-full h-full" />}
                title="Partnership"
                description="We value collaborative relationships with our partners, ensuring mutual respect and understanding as we work toward achieving our shared goals."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 px-4 md:px-8 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-navy">Our Approach</h2>
            <p className="text-xl text-blue-gray max-w-2xl mx-auto">
              A systematic process that ensures success in every project
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ApproachCard
                icon={<FaSearch className="w-full h-full" />}
                title="Discovery & Planning"
                description="It&apos;s talking time! We will have thorough discussions with you to understand your business, budget, and timeline requirements. We will work closely with you throughout the development process to ensure alignment with your evolving needs."
              />
              <ApproachCard
                icon={<FaPencilRuler className="w-full h-full" />}
                title="Design & Development"
                description="It&apos;s show time! Our experts will begin building your dream using cutting-edge technologies and industry best practices, all while brainstorming innovative ideas."
              />
              <ApproachCard
                icon={<FaCheckCircle className="w-full h-full" />}
                title="Testing & Deployment"
                description="It&apos;s rehersal time and Opening night! We will rigorously test the application for all its functional and non-functional requirements and obtain your approval. Once you&apos;re satisfied, your application will go live!"
              />
              <ApproachCard
                icon={<FaTools className="w-full h-full" />}
                title="Support & Maintenance"
                description="It&apos;s time for Encore! We are still with you. We will make sure your application runs smoothly and optimally while seamlessly integrating any new requirements and changes."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

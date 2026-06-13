import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Renovation'];

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <div className="pt-20">
      
      {/* 1. Header Banner */}
      <section className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/assets/images/project_ecr_villa.png" 
            alt="Royal Construction completed projects" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-content mx-auto px-6 text-center"
        >
          <span className="text-orange text-xs md:text-sm uppercase tracking-[0.25em] font-extrabold mb-3 bg-orange/15 px-4 py-2 rounded-full border border-orange/20 inline-block font-poppins">
            Transforming Spaces. Building Trust. Delivering Excellence.
          </span>
          <h1 className="text-h1 text-white mb-6">
            Our Portfolios
          </h1>
          <p className="text-body text-white/60 max-w-2xl mx-auto mb-6">
            Take an in-depth look at our completed luxury villas, commercial zones, modern transformations, and Scandinavian interior designs.
          </p>
        </motion.div>
      </section>

      {/* 2. Filter Tabs & Grid Showcase */}
      <section className="section-padding bg-blueprint bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom"
        >
          
          {/* Tabs header */}
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="label-uppercase">
              Completed Portfolios
            </span>
            <h2 className="text-h2 text-black mb-8">
              Explore Our Project Gallery
            </h2>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-3 border-b border-lightgray-border pb-4 w-full max-w-2xl">
              {categories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-button font-inter text-xs md:text-sm font-semibold uppercase tracking-wider transition-all border focus:outline-none ${
                    activeTab === tab
                      ? 'bg-orange text-white border-orange shadow-glow'
                      : 'border-lightgray-border text-black/50 hover:bg-lightgray hover:text-black'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="animate-fade-in">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Empty fallback */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-lightgray rounded-2xl max-w-xl mx-auto border border-dashed border-black/10">
              <p className="font-inter text-black/45 text-base">
                No projects found in this category. We are currently finalizing portfolios.
              </p>
            </div>
          )}

        </motion.div>
      </section>

      {/* 3. Mid Lead capture banner */}
      <section className="bg-orange py-16 text-white text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom max-w-3xl mx-auto"
        >
          <h2 className="text-h2 text-white mb-4">
            Have a Similar Project in Mind? Let's Discuss
          </h2>
          <p className="text-body text-white/80 max-w-2xl mx-auto mb-6">
            Our structural engineers and designers are ready to translate your spatial ideas into structural blueprints.
          </p>
          <a
            href="tel:+917305485051"
            className="btn-dark inline-flex"
          >
            Discuss Similar Project
          </a>
        </motion.div>
      </section>

    </div>
  );
}

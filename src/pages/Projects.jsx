import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

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
        <div className="relative z-10 max-w-content mx-auto px-6 text-center">
          <span className="text-orange text-xs md:text-sm uppercase tracking-[0.25em] font-extrabold mb-3 bg-orange/15 px-4 py-2 rounded-full border border-orange/20 inline-block font-poppins">
            Transforming Spaces. Building Trust. Delivering Excellence.
          </span>
          <h1 className="font-poppins text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our Portfolios
          </h1>
          <p className="font-inter text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Take an in-depth look at our completed luxury villas, commercial zones, modern transformations, and Scandinavian interior designs.
          </p>
        </div>
      </section>

      {/* 2. Filter Tabs & Grid Showcase */}
      <section className="section-padding bg-blueprint bg-white">
        <div className="container-custom">
          
          {/* Tabs header */}
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3 font-poppins">
              Completed Portfolios
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-black">
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

        </div>
      </section>

      {/* 3. Mid Lead capture banner */}
      <section className="bg-orange py-16 text-white text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="font-poppins text-2xl md:text-3xl font-extrabold mb-4 text-white">
            Have a Similar Project in Mind? Let's Discuss
          </h2>
          <p className="font-inter text-sm md:text-base text-white/80 mb-6">
            Our structural engineers and designers are ready to translate your spatial ideas into structural blueprints.
          </p>
          <a
            href="tel:+917305485051"
            className="inline-flex h-12 px-8 bg-black hover:bg-white hover:text-black text-white rounded-button font-inter text-sm font-semibold items-center justify-center transition-colors shadow-soft"
          >
            Discuss Similar Project
          </a>
        </div>
      </section>

    </div>
  );
}

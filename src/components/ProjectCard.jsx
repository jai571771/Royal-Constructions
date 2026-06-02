import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-lightgray-border shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-premium flex flex-col h-full project-card-wrap">
      
      {/* Image Container with Zoom & Overlay */}
      <div className="relative overflow-hidden h-64 sm:h-72 w-full flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay fade */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to={`/projects/${project.id}`}
            className="w-12 h-12 rounded-full bg-orange text-white flex items-center justify-center hover:scale-110 transition-transform shadow-glow focus:outline-none"
            aria-label={`View details of ${project.title}`}
          >
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-orange text-white font-inter text-[10px] font-bold px-3 py-1.5 rounded-button uppercase tracking-wider shadow-glow">
          {project.category}
        </span>
      </div>

      {/* Content Block */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-1.5 text-xs text-black/40 mb-2 font-inter">
          <MapPin className="w-3.5 h-3.5 text-orange" />
          <span>{project.location}</span>
        </div>
        <h3 className="font-poppins text-lg md:text-xl font-bold text-black mb-3 leading-snug group-hover:text-orange transition-colors">
          {project.title}
        </h3>
        <p className="font-inter text-sm text-black/60 mb-6 leading-relaxed flex-grow">
          {project.shortDesc}
        </p>
        <div className="pt-4 border-t border-lightgray-border flex justify-between items-center mt-auto">
          <span className="text-[11px] uppercase tracking-widest text-black/40 font-semibold font-inter">
            Area: {project.area}
          </span>
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-1.5 font-inter text-sm font-bold text-orange group-hover:text-black transition-colors"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

    </div>
  );
}

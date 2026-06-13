import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Calendar, Clock, ArrowLeft, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import { blogData } from '../data/blogData';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Blog() {
  const { blogId } = useParams();
  const [activeCategory, setActiveCategory] = useState('All');

  // Scroll to top on route updates
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  // Categories list
  const categories = ['All', 'Construction Tips', 'Interior Design', 'Building Materials'];

  // FILTER LOGIC
  const filteredArticles = activeCategory === 'All'
    ? blogData
    : blogData.filter(a => a.category === activeCategory);

  // ARTICLE READ VIEW
  if (blogId) {
    const article = blogData.find(a => a.id === blogId);

    if (!article) {
      return (
        <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center bg-blueprint bg-white">
          <h2 className="text-h2 text-black mb-4">Article Not Found</h2>
          <Link to="/blog" className="btn-primary">
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>
      );
    }

    return (
      <div className="pt-24 bg-blueprint bg-white">
        
        {/* Article Header Banner */}
        <section className="bg-lightgray py-12 border-b border-lightgray-border">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="container-custom max-w-4xl"
          >
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-1 text-xs text-black/40 font-inter mb-4">
              <Link to="/" className="hover:text-orange">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/blog" className="hover:text-orange">Blog</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-black/60 truncate">{article.title}</span>
            </div>

            <span className="bg-orange text-white text-[10px] font-bold px-3 py-1 rounded-button uppercase tracking-wider block w-max mb-4">
              {article.category}
            </span>
            <h1 className="text-h2 text-black mb-6">
              {article.title}
            </h1>

            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm text-black/55 font-inter">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-orange" />
                <span>By {article.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-orange" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-orange" />
                <span>{article.readTime}</span>
              </div>
            </div>

          </motion.div>
        </section>

        {/* Article Body */}
        <section className="py-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="container-custom max-w-3xl"
          >
            
            {/* Lead Image */}
            <div className="rounded-2xl overflow-hidden shadow-soft h-[250px] md:h-[400px] mb-12 border border-lightgray-border">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* HTML/Markdown Content parser placeholder */}
            <article className="prose prose-orange max-w-none font-inter text-sm md:text-base text-black/75 leading-relaxed flex flex-col gap-6">
              
              {/* Parse paragraph elements from backticks content */}
              {article.content.split('\n\n').map((paragraph, index) => {
                if (!paragraph.trim()) return null;

                // Handle Subheadings
                if (paragraph.startsWith('###')) {
                  return (
                    <h3 key={index} className="font-poppins text-lg md:text-xl font-bold text-black mt-8 mb-2">
                      {paragraph.replace('###', '').trim()}
                    </h3>
                  );
                }

                // Handle bullet items
                if (paragraph.startsWith('*')) {
                  return (
                    <ul key={index} className="list-disc pl-6 flex flex-col gap-2">
                      {paragraph.split('\n').map((bullet, bIdx) => {
                        const cleanBullet = bullet.replace('*', '').trim();
                        // Parse bold markers inside bullets
                        const parts = cleanBullet.split('**');
                        return (
                          <li key={bIdx} className="text-black/70 text-xs md:text-sm leading-relaxed">
                            {parts.map((p, pIdx) => pIdx % 2 === 1 ? <strong key={pIdx} className="text-black font-bold">{p}</strong> : p)}
                          </li>
                        );
                      })}
                    </ul>
                  );
                }

                // Parse bold markers inside standard paragraphs
                const parts = paragraph.split('**');
                return (
                  <p key={index} className="text-body text-black/75 mb-6">
                    {parts.map((p, pIdx) => pIdx % 2 === 1 ? <strong key={pIdx} className="text-black font-bold">{p}</strong> : p)}
                  </p>
                );
              })}

            </article>

            {/* Back action */}
            <div className="pt-12 border-t border-lightgray-border mt-12 flex justify-between items-center">
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-bold text-orange hover:text-black transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Articles
              </Link>
              <div className="flex gap-2">
                {article.tags.map((t, idx) => (
                  <span key={idx} className="bg-lightgray text-black/55 text-[10px] font-semibold font-inter px-3 py-1 rounded-full">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </section>

        {/* CTA */}
        <section className="bg-lightgray py-16 border-t border-lightgray-border">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="container-custom max-w-3xl text-center"
          >
            <h3 className="text-h3 text-black mb-3">
              Planning to Build a Custom Home in Chennai?
            </h3>
            <p className="text-body text-black/60 mb-6 max-w-none">
              Our engineering coordinators offer expert assistance on planning regulations and foundation footings.
            </p>
            <Link to="/contact" className="btn-primary inline-flex">
              Get Free Consultation
            </Link>
          </motion.div>
        </section>

      </div>
    );
  }

  // ARTICLES LISTING VIEW
  return (
    <div className="pt-20">
      
      {/* 1. Banner Cover */}
      <section className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/assets/images/project_scandic_penthouse.png" 
            alt="Royal Construction Knowledge Hub" 
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
            Knowledge Hub & Guides
          </h1>
          <p className="text-body text-white/60 max-w-2xl mx-auto mb-6">
            Educational insights regarding structural foundations, concrete curing checkpoints, and local building regulations in Chennai.
          </p>
        </motion.div>
      </section>

      {/* 2. Grid & Filter Listing */}
      <section className="section-padding bg-blueprint bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom"
        >
          
          {/* Header & Tabs */}
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="label-uppercase">
              Resource Guides
            </span>
            <h2 className="text-h2 text-black mb-8">
              Educational Resource Articles
            </h2>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-3 border-b border-lightgray-border pb-4 w-full max-w-2xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-button font-inter text-xs md:text-sm font-semibold uppercase tracking-wider transition-all border focus:outline-none ${
                    activeCategory === cat
                      ? 'bg-orange text-white border-orange shadow-glow'
                      : 'border-lightgray-border text-black/50 hover:bg-lightgray hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Listing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div 
                key={article.id} 
                className="bg-white rounded-2xl overflow-hidden border border-lightgray-border shadow-soft flex flex-col h-full group"
              >
                <div className="h-56 overflow-hidden w-full relative flex-shrink-0">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-button uppercase font-inter tracking-wider">
                    {article.category}
                  </span>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <span className="block text-[11px] font-semibold text-black/40 uppercase tracking-widest font-inter mb-2">
                    {article.date} · {article.readTime}
                  </span>
                  <h3 className="text-h3 text-black mb-3 group-hover:text-orange transition-colors">
                    <Link to={`/blog/${article.id}`}>{article.title}</Link>
                  </h3>
                  <p className="text-body text-black/60 mb-6 leading-relaxed flex-grow">
                    {article.shortDesc}
                  </p>
                  <Link 
                    to={`/blog/${article.id}`} 
                    className="flex items-center gap-1.5 font-inter text-sm font-bold text-orange mt-auto group-hover:text-black transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty fallback */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-20 bg-lightgray rounded-2xl max-w-xl mx-auto border border-dashed border-black/10">
              <p className="font-inter text-black/45 text-sm">
                No articles published in this category yet. Stay tuned for updates.
              </p>
            </div>
          )}

        </motion.div>
      </section>

    </div>
  );
}

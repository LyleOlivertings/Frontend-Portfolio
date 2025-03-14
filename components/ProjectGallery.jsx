'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectGallery() {
  const [selectedTag, setSelectedTag] = useState('all');
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  return (
    <section className="py-24 px-4 bg-slate-900/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Featured Work
        </motion.h2>
        
        {/* Tag Filters */}
        <motion.div 
          className="flex flex-wrap gap-3 justify-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                selectedTag === tag
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects
            .filter(project => 
              selectedTag === 'all' || project.tags.includes(selectedTag)
            ).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all h-full flex flex-col"
    >
      <div className="mb-4">
        <div className="w-full h-48 bg-slate-800 rounded-xl mb-6 overflow-hidden">
          {/* Replace with actual project image */}
          <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
        </div>
        
        <h3 className="text-2xl font-semibold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-5">{project.description}</p>
      </div>
      
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 rounded-full bg-white/5 text-sm text-blue-400 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Case Study
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
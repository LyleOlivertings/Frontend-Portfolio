'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -top-48 -left-48"
      />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-3 mb-8"
            >
              <span className="text-lg text-blue-400">Lyle Oliver | Frontend Developer</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transforming Ideas<br />Into Digital Reality
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Passionate about crafting beautiful, functional web experiences with modern technologies. Focused on React ecosystem and user-centric design.
            </p>
            
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all"
              >
                <span>View Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all"
              >
                Let's Connect
              </motion.a>
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center gap-6 mt-16">
            {['github', 'linkedin', 'twitter'].map((platform) => (
              <motion.a
                key={platform}
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
                href={`https://${platform}.com/LyleOliverTings`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{platform}</span>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  {/* Add respective SVG icons here */}
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
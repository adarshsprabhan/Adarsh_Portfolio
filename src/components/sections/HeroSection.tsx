'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, MessageSquare, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PORTFOLIO_DATA, SOCIAL_LINKS } from '@/data/portfolio';

const roles = ['Software Engineer', 'AI Enthusiast', 'Full Stack Developer', 'Problem Solver'];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const getIcon = (name: string) => {
    if (name === 'GitHub') return <Code2 size={24} />;
    if (name === 'LinkedIn') return <MessageSquare size={24} />;
    if (name === 'Email') return <Mail size={24} />;
    return null;
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 pt-20 overflow-hidden bg-slate-950">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob top-0 -left-32"></div>
        <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blob top-1/3 -right-32" style={{ animationDelay: '7s' }}></div>
        <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob bottom-0 left-1/2" style={{ animationDelay: '14s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
                {PORTFOLIO_DATA.name.split(' ')[0]}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-3xl md:text-4xl font-semibold text-cyan-300 h-16 flex items-center justify-center">
              <motion.span
                key={roles[currentRole]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.span>
            </p>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            {PORTFOLIO_DATA.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <Button variant="primary" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = `mailto:${PORTFOLIO_DATA.email}`)}
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 justify-center pt-8">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-slate-400 hover:text-white transition-colors ${link.color}`}
              >
                {getIcon(link.name)}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-cyan-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

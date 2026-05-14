'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export const AboutSection = () => {
  const highlights = [
    { icon: Code2, label: 'Full Stack Developer', description: 'Building end-to-end solutions' },
    { icon: Zap, label: 'Performance Focused', description: 'Optimized for speed and efficiency' },
    { icon: Target, label: 'Problem Solver', description: 'Creative solutions to complex challenges' },
  ];

  return (
    <section id="about" className="w-full py-20 px-4 md:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Who I Am</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">{PORTFOLIO_DATA.description}</p>
              <Button variant="primary" size="md">
                Download Resume
              </Button>
            </div>

            <div className="grid gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card variant="glass">
                      <CardContent className="flex items-start gap-4">
                        <Icon className="text-cyan-400 mt-1" size={24} />
                        <div>
                          <h3 className="font-semibold text-white mb-1">{highlight.label}</h3>
                          <p className="text-slate-400 text-sm">{highlight.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PROJECTS } from '@/data/portfolio';

export const ProjectsSection = () => {
  const featured = PROJECTS.filter((p) => p.featured);
  const other = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="w-full py-20 px-4 md:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Projects</h2>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featured.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" className="h-full hover:border-cyan-400 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-slate-400 text-sm font-semibold mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-semibold mb-2">Key Features:</p>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          {other.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Other Notable Projects</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {other.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card variant="glass" className="h-full hover:border-cyan-400 transition-colors">
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" size="sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

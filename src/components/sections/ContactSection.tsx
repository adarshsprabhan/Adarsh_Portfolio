'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PORTFOLIO_DATA, SOCIAL_LINKS } from '@/data/portfolio';

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.currentTarget;
    target.submit();
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: PORTFOLIO_DATA.email, href: `mailto:${PORTFOLIO_DATA.email}` },
    { icon: Phone, label: 'Phone', value: PORTFOLIO_DATA.phone, href: `tel:${PORTFOLIO_DATA.phone}` },
    { icon: MapPin, label: 'Location', value: PORTFOLIO_DATA.location, href: '#' },
  ];

  return (
    <section id="contact" className="w-full py-20 px-4 md:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Contact Me</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <Card variant="glass">
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} action="https://formspree.io/f/xzzzwpwj" method="POST" className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        name="message"
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors h-32 resize-none"
                        required
                      />
                    </div>
                    <Button type="submit" variant="primary" className="w-full flex items-center justify-center gap-2">
                      <Send size={18} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <Card variant="glass" className="mb-6">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <a key={index} href={info.href} className="flex flex-col items-center text-center group hover:opacity-80 transition-opacity">
                          <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors mb-3">
                            <Icon className="text-cyan-400" size={24} />
                          </div>
                          <p className="text-slate-400 text-sm mb-1">{info.label}</p>
                          <p className="text-white font-semibold break-words">{info.value}</p>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card variant="glass">
                <CardContent className="pt-6">
                  <h3 className="text-white font-semibold mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-slate-400 hover:text-white transition-colors ${link.color}`}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

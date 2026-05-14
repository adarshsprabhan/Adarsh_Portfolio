'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA, SOCIAL_LINKS } from '@/data/portfolio';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent mb-2">
              {PORTFOLIO_DATA.name}
            </h3>
            <p className="text-slate-400 text-sm">{PORTFOLIO_DATA.title}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">
                Email:{' '}
                <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-cyan-400 hover:text-cyan-300">
                  {PORTFOLIO_DATA.email}
                </a>
              </li>
              <li className="text-slate-400">
                Phone:{' '}
                <a href={`tel:${PORTFOLIO_DATA.phone}`} className="text-cyan-400 hover:text-cyan-300">
                  {PORTFOLIO_DATA.phone}
                </a>
              </li>
              <li className="text-slate-400">{PORTFOLIO_DATA.location}</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-400 hover:text-white transition-colors ${link.color}`}
                  title={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-500 text-sm">
            © {currentYear} Adarsh Sindhu Prabhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

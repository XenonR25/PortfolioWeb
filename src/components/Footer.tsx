import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-slate-300 text-sm leading-6">
              Passionate about creating innovative solutions and building meaningful digital experiences.
              Let&apos;s connect and explore opportunities together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {/* If you use sections (for single page apps): */}
              <a href="#home" className="block text-slate-300 hover:text-white transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="block text-slate-300 hover:text-white transition-colors text-sm">
                About
              </a>
              <a href="#experience" className="block text-slate-300 hover:text-white transition-colors text-sm">
                Experience
              </a>
              <a href="#skills" className="block text-slate-300 hover:text-white transition-colors text-sm">
                Skills
              </a>
              <a href="#projects" className="block text-slate-300 hover:text-white transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="block text-slate-300 hover:text-white transition-colors text-sm">
                Contact
              </a>
              {/* If you use react-router or similar, use <Link /> instead */}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/XenonR25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nm-rahik-2oo1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Rahik2535"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:rahik2535@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 text-slate-500 text-xs">
              <span>Chattogram, Bangladesh</span>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} NM RAHIK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
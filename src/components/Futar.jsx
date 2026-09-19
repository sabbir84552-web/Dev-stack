import React from 'react';
import logoImg from '../assets/logo-text.png'; 

export default function Futar() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 mt-16 pt-12 pb-8 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">
          
          {/* Brand Block (2 Columns wide) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="Dev Stack Logo" className="h-8 object-contain" />
            </div>
            
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links with Real URLs */}
            <div className="flex items-center gap-4 text-xs font-medium text-slate-700 pt-2">
              <a 
                href="https://github.com/sabbir84552-web" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-pink-600 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-pink-600 transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-pink-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Group 1: Product Links */}
          <div>
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-3">
              PRODUCT
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Group 2: Company Links */}
          <div>
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-3">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#" className="hover:text-pink-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Group 3: Legal Links */}
          <div>
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-3">
              LEGAL
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <span>© {new Date().getFullYear()} Dev Stack. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
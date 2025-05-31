
import React from 'react';
import { Sparkles } from 'lucide-react';

export const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/30 to-teal-100/30" />
      <div className="container mx-auto px-6 py-8 relative">
        <div className="flex items-center justify-center space-x-3">
          <div className="relative">
            <Sparkles className="text-emerald-500 animate-pulse" size={32} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-stone-800">
            AI Concepts
            <span className="text-emerald-600 ml-2">Explained</span>
          </h1>
        </div>
        <div className="text-center mt-4">
          <p className="text-stone-600 text-sm">Interactive Guide for Your AI Journey</p>
        </div>
      </div>
    </header>
  );
};

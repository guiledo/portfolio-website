import React from 'react';
import reactLogo from '@/assets/react.png';
import typescriptLogo from '@/assets/typescript.png';
import viteLogo from '@/assets/vite.svg';
import vercelLogo from '@/assets/vercel.svg';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-6 px-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <div className="mb-2 md:mb-0 flex items-center gap-2">
          Built with:
          <img src={reactLogo} alt="React" className="h-4 w-4" /> React
          <img src={typescriptLogo} alt="TypeScript" className="h-4 w-4" /> TypeScript
          <img src={viteLogo} alt="Vite" className="h-4 w-4" /> Vite
          <img src={vercelLogo} alt="Vercel" className="h-4 w-4" /> Vercel
        </div>
        <div>
          Copyright © Guilherme Ledo Chagas 2025 All rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

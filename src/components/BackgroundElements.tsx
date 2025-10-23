import { useEffect, useState } from 'react';

const BackgroundElements = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating code symbols */}
      <div className="absolute top-20 left-10 text-primary/15 text-2xl animate-pulse">
        {'</>'}
      </div>
      <div className="absolute top-40 right-20 text-primary/15 text-xl animate-pulse delay-1000">
        {'{}'}
      </div>
      <div className="absolute top-60 left-1/4 text-primary/15 text-lg animate-pulse delay-2000">
        {'()'}
      </div>
      <div className="absolute top-80 right-1/3 text-primary/15 text-2xl animate-pulse delay-3000">
        {'[]'}
      </div>
      
      {/* More floating elements */}
      <div className="absolute top-1/3 left-16 text-primary/15 text-sm animate-pulse delay-4000">
        {'React.js'}
      </div>
      <div className="absolute top-1/2 right-16 text-primary/15 text-sm animate-pulse delay-5000">
        {'TypeScript'}
      </div>
      <div className="absolute top-2/3 left-1/4 text-primary/15 text-sm animate-pulse delay-6000 [writing-mode:vertical-rl]">
        {'Node.js'}
      </div>
      
      {/* Animated dots */}
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-primary/25 rounded-full animate-ping delay-7000"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary/35 rounded-full animate-ping delay-8000"></div>
      <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-primary/30 rounded-full animate-ping delay-9000"></div>
      
      {/* Subtle line */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
    </div>
  );
};

export default BackgroundElements;

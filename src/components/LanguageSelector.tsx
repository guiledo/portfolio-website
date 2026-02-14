import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const LanguageSelector = () => {
  const { setLanguage, isInitialized } = useLanguage();

  if (isInitialized) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <Card className="w-full max-w-md animate-in fade-in zoom-in duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Choose your language / Escolha seu idioma</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-2">
          <Button 
            size="lg" 
            variant="outline"
            className="flex-1 text-lg py-8 hover:bg-primary hover:text-primary-foreground transition-all"
            onClick={() => setLanguage('en-US')}
          >
            English (US)
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="flex-1 text-lg py-8 hover:bg-primary hover:text-primary-foreground transition-all"
            onClick={() => setLanguage('pt-BR')}
          >
            Português (BR)
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

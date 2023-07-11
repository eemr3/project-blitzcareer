import React from 'react';

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export default function Page({ children, className }: PageProps) {
  return (
    <div className={`w-full min-h-screen bg-gray-50 dark:bg-gray-900 ${className}`}>
      {children}
      <footer className="fixed bottom-0 left-0 h-10 w-full">
        <p className="text-center text-gray-50">
          Todos os direitos reservados &copy; Emerson Moirera
        </p>
      </footer>
    </div>
  );
}

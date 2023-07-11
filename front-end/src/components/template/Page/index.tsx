import React from 'react';
import Footer from '../../Footer';

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export default function Page({ children, className }: PageProps) {
  return (
    <div className={`w-full min-h-screen bg-gray-50 dark:bg-gray-900 ${className}`}>
      {children}
      <Footer />
    </div>
  );
}

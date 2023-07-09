import React from 'react';

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export default function Page({ children, className }: PageProps) {
  return (
    <div className={`w-full min-h-screen bg-gray-50 dark:bg-gray-900 ${className}`}>
      {children}
    </div>
  );
}

import React from 'react';

interface IsPasswordProps {
  children: React.ReactNode;
}
export function IsPassword({ children }: IsPasswordProps) {
  return (
    <div className={`relative flex w-full items-center justify-end`}>{children}</div>
  );
}

import React from 'react';

interface LoginAndRegisterProps {
  children: React.ReactNode;
  className?: string;
}
export default function LoginAndRegister({ children, className }: LoginAndRegisterProps) {
  return (
    <section className="bg-gray-50 dark:bg-[#111827]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <h1 className="sm:text-[40px] sm:mb-5">Ebytr </h1>
        </a>
        {children}
      </div>
    </section>
  );
}

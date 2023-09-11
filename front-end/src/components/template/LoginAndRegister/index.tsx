import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
interface LoginAndRegisterProps {
  children: React.ReactNode;
  className?: string;
}
export default function LoginAndRegister({ children, className }: LoginAndRegisterProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Uma função simples para verificar qual tema está ativo
  function isDark() {
    return theme === 'dark';
  }

  return (
    <section className="bg-gray-50 dark:bg-[#111827]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* <a
          onClick={() => setTheme(isDark() ? 'light' : 'dark')}
          aria-label="Theme toggle"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white cursor-pointer"
        >
          <h1 className="sm:text-[40px] sm:mb-5">Ebytr</h1>
        </a> */}
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              {/* <button
                className="text-white dark:text-gray-800 shadow-blackA7 hover:bg-violet3 inline-flex h-[35px] w-[350px]
                 items-center justify-center  bg-gray-800 dark:bg-white
                 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              >
                Ebytr
              </button> */}
              <h1
                onClick={() => setTheme(isDark() ? 'light' : 'dark')}
                aria-label="Theme toggle"
                className="sm:text-[40px] font-bold sm:mb-5 cursor-pointer"
              >
                Ebytr
              </h1>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade 
                data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade 
                data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade 
                data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade
                 text-white dark:text-gray-800 select-none rounded-[4px] bg-gray-800
                  dark:bg-white px-[15px] 
                 py-[10px] text-[15px] leading-none 
                 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
                 will-change-[transform,opacity]"
                sideOffset={5}
              >
                {theme === 'light'
                  ? 'Mudar para o tema escuro'
                  : 'Mudar para o tema claro'}
                <Tooltip.Arrow className="fill-gray-800 dark:fill-white" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
        {children}
      </div>
    </section>
  );
}

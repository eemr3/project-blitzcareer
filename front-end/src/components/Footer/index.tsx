import React from 'react';

export default function Footer() {
  return (
    <footer
      className="flex items-center justify-center fixed bottom-0 left-0 h-16 w-full
       bg-gray-50 dark:bg-gray-900 border-t border-t-gray-700"
    >
      <p className="text-gray-50">
        &copy; {new Date().getFullYear()} Emerson Moirera. Todos os direitos reservados.
      </p>
    </footer>
  );
}

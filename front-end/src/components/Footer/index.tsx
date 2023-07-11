import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 h-10 w-full">
      <p className="text-center text-gray-50">
        &copy; {new Date().getFullYear()} Emerson Moirera. Todos os direitos reservados.
      </p>
    </footer>
  );
}

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import TodoProvider from '../context/TodoContext';
import AuthProvider from '../context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <TodoProvider>
        <Component {...pageProps} />
      </TodoProvider>
    </AuthProvider>
  );
}

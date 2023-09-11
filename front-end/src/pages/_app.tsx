import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import TodoProvider from '../context/TodoContext';
import AuthProvider from '../context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <AuthProvider>
        <TodoProvider>
          <Component {...pageProps} />
        </TodoProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

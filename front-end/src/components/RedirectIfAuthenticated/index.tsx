import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface RedirectIfAuthenticatedProps {
  children: React.ReactNode;
}

export default function RedirectIfAuthenticated({
  children,
}: RedirectIfAuthenticatedProps) {
  const router = useRouter();

  const isAuthenticated = Cookies.get('access_token');

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/home');
    }
  }, [isAuthenticated, router]);

  return children;
}

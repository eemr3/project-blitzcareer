import { useRouter } from 'next/router';
import { createContext, useState } from 'react';
import Cookies from 'js-cookie';
import { http } from '../service/api';
import { setCookie } from '../shared/cookies';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface DataLogin {
  email: string;
  password: string;
}

interface AuthContextProps {
  sigIn: (data: DataLogin) => Promise<void>;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();

  const sigIn = async (data: DataLogin) => {
    try {
      const response = await http.post('/login', data);
      setCookie('access_token', response.data.access_token);

      router.push('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const signout = () => {
    Cookies.remove('access_token');
    router.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        sigIn,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

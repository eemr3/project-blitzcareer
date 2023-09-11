import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { createContext, useState } from 'react';
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
  sigIn: (data: DataLogin) => Promise<any>;
  signout: () => void;
  loading?: boolean;
  setLoading: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const sigIn = async (data: DataLogin) => {
    try {
      setLoading(true);
      const response = await http.post('/login', data);

      if (response.status === 200) {
        setCookie('access_token', response.data.access_token);
        setTimeout(() => {
          router.push('/home');
        }, 3000);
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
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
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

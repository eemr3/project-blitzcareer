import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { http } from '../service/api';
import { setCookie } from '../shared/cookies';

interface TodoProviderProps {
  children: React.ReactNode;
}

type DataLogin = {
  email: string;
  password: string;
};

type DataRegister = {
  name: string;
  email: string;
  password: string;
};

interface TodoContextProps {
  handlerAddTodo: () => void;
  setTodoData: (value: any) => void;
  todoDate: any;
  sigIn: (data: DataLogin) => Promise<void>;
  setLoginData: (value: { email: string; password: string }) => void;
  loginData: { email: string; password: string };
  signout: () => void;
  createAccount: (data: DataRegister) => Promise<void>;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export default function TodoProvider({ children }: TodoProviderProps) {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [todoDate, setTodoData] = useState([]);

  const handlerAddTodo = async () => {
    const responseTodo = await http.post('/tasks', todoDate, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });

    console.log(responseTodo);
  };

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

  const createAccount = async (data: DataRegister) => {
    try {
      const response = await http.post('/users', data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        handlerAddTodo,
        setTodoData,
        todoDate,
        sigIn,
        setLoginData,
        loginData,
        signout,
        createAccount,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

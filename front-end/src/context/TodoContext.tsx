import React, { createContext, useState } from 'react';
import { http } from '../service/api';
import { DataTasks } from '../shared/interface/data-tasks';
import { AxiosError } from 'axios';

interface TodoProviderProps {
  children: React.ReactNode;
}

type DataRegister = {
  name: string;
  email: string;
  password: string;
};

interface TodoContextProps {
  handlerAddTodo: () => void;
  setTodoData: (value: any) => void;
  todoDate: any;
  createAccount: (data: DataRegister) => Promise<any>;
  deleteTask: (id: string) => Promise<void>;
  open: boolean;
  setOpen: (value: boolean) => void;
  taskIdDelete: string;
  setTaskIdDelete: (value: string) => void;
  cards: DataTasks[];
  setCards: (value: DataTasks[]) => void;
  inputDataTask: DataTasks;
  setInputDataTask: (value: DataTasks) => void;
  isCreate: boolean;
  setIsCreate: (value: boolean) => void;
  editTask: (id: string, data: Partial<DataTasks>) => Promise<void>;
  updateTask: DataTasks;
  setUpdateTask: (value: DataTasks) => void;
}

const initialCards: DataTasks[] = [];

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export default function TodoProvider({ children }: TodoProviderProps) {
  const [cards, setCards] = useState<DataTasks[]>(initialCards);
  const [open, setOpen] = useState(false);
  const [isCreate, setIsCreate] = useState(true);
  const [taskIdDelete, setTaskIdDelete] = useState<string>('');
  const [inputDataTask, setInputDataTask] = useState<DataTasks>({
    title: '',
    description: '',
    status: '',
  });
  const [updateTask, setUpdateTask] = useState<DataTasks>({
    id: 0,
    title: '',
    description: '',
    status: '',
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

  const createAccount = async (data: DataRegister) => {
    try {
      const response = await http.post('/users', data);
      return response;
    } catch (error) {
      console.log(error);
      return error as AxiosError;
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const response = await http.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = async (id: string, data: Partial<DataTasks>) => {
    try {
      const response = await http.put(`/tasks/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
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
        createAccount,
        deleteTask,
        open,
        setOpen,
        taskIdDelete,
        setTaskIdDelete,
        cards,
        setCards,
        inputDataTask,
        setInputDataTask,
        isCreate,
        setIsCreate,
        editTask,
        updateTask,
        setUpdateTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

import React, { useEffect, useState } from 'react';
import { http } from '../../service/api';
import { getCookie } from '../../shared/cookies';
import Column from '../Column';
import InputText from '../Form/InputText';

export type ICard = {
  id?: number;
  title: string;
  description: string;
  status: string;
};

const initialCards: ICard[] = [];

const Board: React.FC = () => {
  const [cards, setCards] = useState<ICard[]>(initialCards);
  const [dataAddTask, setDataAddTask] = useState<ICard>({
    title: '',
    description: '',
    status: '',
  });

  const handleDrop = async (
    event: React.DragEvent<HTMLDivElement>,
    newStatus: string,
  ) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData('text/plain');
    const updatedCards = cards.map((card) => {
      if (card?.id?.toString() === cardId) {
        return {
          ...card,
          status: newStatus,
        };
      }
      return card;
    });
    setCards(updatedCards);
    try {
      await http.put(
        `/tasks/${cardId}`,
        {
          status: newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${getCookie('access_token')}`,
          },
        },
      );
    } catch (error) {}
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, cardId: string) => {
    event.dataTransfer.setData('text/plain', cardId);
  };

  useEffect(() => {
    const getTasks = async () => {
      const response = await http.get('/tasks', {
        headers: {
          Authorization: `Bearer ${getCookie('access_token')}`,
        },
      });
      if (response.status === 200) {
        setCards(response.data);
      }
    };
    getTasks();
  }, []);

  const handleSaveNewTask = async () => {
    const response = await http.post('/tasks', {
      title: dataAddTask.title,
      description: dataAddTask.description,
    });
    if (response.status === 201) {
      setCards([...cards, response.data]);
      setDataAddTask({ title: '', description: '', status: '' });
    }
  };

  return (
    <div className="w-full flex-col flex justify-center items-center">
      <div className="mx-auto container flex items-center justify-center gap-x-4">
        <div className="flex gap-x-4">
          <InputText
            className="w-[300px]"
            id="title"
            name="title"
            type="text"
            placeholder="Titulo"
            value={dataAddTask.title}
            onChange={(e) => setDataAddTask({ ...dataAddTask, title: e.target.value })}
          />
          <InputText
            className="w-[530px]"
            name="description"
            id="description"
            type="text"
            placeholder="Descrição"
            value={dataAddTask.description}
            onChange={(e) =>
              setDataAddTask({ ...dataAddTask, description: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col pt-2">
          <button
            onClick={handleSaveNewTask}
            className="w-[150px] text-white bg-blue-600 h-[40px]
          hover:bg-primary-700 focus:ring-4 focus:outline-none
           focus:ring-primary-300 font-medium rounded-lg text-sm
           px-5 text-center dark:bg-primary-600
           dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Adicionar
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-10 gap-x-8">
        <Column
          title="Pendente"
          status="pending"
          cards={cards.filter((card) => card.status === 'pending')}
          onDrop={handleDrop}
          onDragStart={handleDragStart}
        />
        <Column
          title="Em Progresso"
          status="in-progress"
          cards={cards.filter((card) => card.status === 'in-progress')}
          onDrop={handleDrop}
          onDragStart={handleDragStart}
        />
        <Column
          title="Feito"
          status="done"
          cards={cards.filter((card) => card.status === 'done')}
          onDrop={handleDrop}
          onDragStart={handleDragStart}
        />
      </div>
    </div>
  );
};

export default Board;

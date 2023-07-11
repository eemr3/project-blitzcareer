import React, { useContext, useEffect } from 'react';
import { http } from '../../service/api';
import { getCookie } from '../../shared/cookies';
import Column from '../Column';
import InputText from '../Form/InputText';
import { DataTasks } from '../../shared/interface/data-tasks';
import { TodoContext } from '../../context/TodoContext';

export interface BoardProps {
  data: DataTasks[];
}

const Board: React.FC<BoardProps> = ({ data }) => {
  const {
    cards,
    setCards,
    inputDataTask,
    setInputDataTask,
    isCreate,
    updateTask,
    editTask,
    setIsCreate,
  } = useContext(TodoContext);

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
      await editTask(cardId, {
        status: newStatus,
      });
    } catch (error) {}
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, cardId: string) => {
    event.dataTransfer.setData('text/plain', cardId);
  };

  useEffect(() => {
    const getTasks = async () => {
      setCards(data);
    };
    getTasks();
  }, [data, setCards]);

  const handleSaveNewTask = async () => {
    const response = await http.post('/tasks', {
      title: inputDataTask.title,
      description: inputDataTask.description,
    });
    if (response.status === 201) {
      setCards([...cards, response.data]);
      setInputDataTask({ title: '', description: '', status: '' });
    }
  };

  const handleEditTask = async () => {
    const data = {
      title: inputDataTask.title,
      description: inputDataTask.description,
      status: updateTask.status,
    };

    await editTask(String(updateTask.id), data);
    const index = cards.findIndex((card) => card.id === updateTask.id);
    const newCards = [...cards];
    newCards[index] = {
      ...newCards[index],
      title: inputDataTask.title,
      description: inputDataTask.description,
    };
    setCards(newCards);
    setInputDataTask({ title: '', description: '', status: '' });
    setIsCreate(true);
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
            value={inputDataTask.title}
            onChange={(e) =>
              setInputDataTask({ ...inputDataTask, title: e.target.value })
            }
          />
          <InputText
            className="w-[530px]"
            name="description"
            id="description"
            type="text"
            placeholder="Descrição"
            value={inputDataTask.description}
            onChange={(e) =>
              setInputDataTask({ ...inputDataTask, description: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col pt-2">
          <button
            onClick={isCreate ? handleSaveNewTask : handleEditTask}
            className={`w-[150px] text-white ${
              isCreate ? 'bg-blue-600' : 'bg-orange-600'
            } h-[40px]
          hover:bg-primary-700 focus:ring-4 focus:outline-none
           focus:ring-primary-300 font-medium rounded-lg text-sm
           px-5 text-center dark:bg-primary-600
           dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
          >
            {isCreate ? 'Adicionar' : 'Editar'}
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-10 gap-x-8">
        <Column
          title="Pendente"
          status="pending"
          cards={cards?.filter((card) => card.status === 'pending')}
          onDrop={handleDrop}
          onDragStart={handleDragStart}
        />
        <Column
          title="Em Progresso"
          status="in-progress"
          cards={cards?.filter((card) => card.status === 'in-progress')}
          onDrop={handleDrop}
          onDragStart={handleDragStart}
        />
        <Column
          title="Feito"
          status="done"
          cards={cards?.filter((card) => card.status === 'done')}
          onDrop={handleDrop}
          onDragStart={handleDragStart}
        />
      </div>
    </div>
  );
};

export default Board;

import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { convertDate } from '../../shared/date-fromated';
import { ModalConfirmation } from '../Modal';
import { DataTasks } from '../../shared/interface/data-tasks';
export type CardProps = {
  card: {
    id?: number;
    title: string;
    description: string;
    status: string;
    createdAt?: Date;
  };
  onDragStart: (event: React.DragEvent<HTMLDivElement>, cardId: string) => void;
};

const Card: React.FC<CardProps> = ({ card, onDragStart }) => {
  const {
    setOpen,
    setTaskIdDelete,
    setInputDataTask,
    inputDataTask,
    setUpdateTask,
    setIsCreate,
  } = useContext(TodoContext);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    if (!card?.id) return;
    onDragStart(event, card?.id?.toString());
  };

  const handleDeleteTask = (id: string) => {
    setOpen(true);
    setTaskIdDelete(id);
  };

  const handleEditTask = ({ title, description, status, id }: DataTasks) => {
    setIsCreate(false);
    setInputDataTask({
      ...inputDataTask,
      title,
      description,
    });

    setUpdateTask({
      id: Number(id),
      title: inputDataTask.title,
      description: inputDataTask.description,
      status,
    });
  };

  return (
    <>
      <ModalConfirmation />

      <div
        className={`${
          card.status === 'pending'
            ? 'bg-blue-300'
            : card.status === 'in-progress'
            ? 'bg-orange-300'
            : 'bg-green-300'
        } rounded-lg  shadow-md mb-4 cursor-grab active:cursor-grabbing`}
        draggable
        onDragStart={handleDragStart}
      >
        <div className="p-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
          <p className="text-gray-600 mt-2">
            {card.createdAt && convertDate(card.createdAt)}
          </p>
        </div>

        {card.status !== 'done' && (
          <div className="flex gap-x-2 p-2 justify-end mt-4 w-full">
            <button
              type="button"
              onClick={() =>
                handleEditTask({
                  title: card.title,
                  description: card.description,
                  status: card.status,
                  id: card.id,
                })
              }
              className={`rounded-full ${
                card.status === 'pending'
                  ? 'bg-blue-300'
                  : card.status === 'in-progress'
                  ? 'bg-orange-300'
                  : 'bg-green-300'
              } p-1 text-gray-800 hover:text-gray-500 focus:outline-none 
              focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800`}
            >
              <span className="sr-only">View notifications</span>
              <PencilSquareIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              onClick={() => handleDeleteTask(String(card.id))}
              type="button"
              className={`rounded-full ${
                card.status === 'pending'
                  ? 'bg-blue-300'
                  : card.status === 'in-progress'
                  ? 'bg-orange-300'
                  : 'bg-green-300'
              } p-1 text-red-700 hover:text-red-500 focus:outline-none 
                focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800`}
            >
              <span className="sr-only">View notifications</span>
              <TrashIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;

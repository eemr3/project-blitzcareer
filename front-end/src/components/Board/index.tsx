import React, { useContext, useEffect } from 'react';
import { http } from '../../service/api';
import Column from '../Column';
// import InputText from '../Form/CustomInput/InputRoot';
import { DataTasks } from '../../shared/interface/data-tasks';
import { TodoContext } from '../../context/TodoContext';
import { useFormik } from 'formik';
import { boardSchema } from './board.schema';
import { ArrowPathIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Input } from '../Form/CustomInput';

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

  const handleSaveNewTask = async (data: any) => {
    const response = await http.post('/tasks', data);
    if (response.status === 201) {
      setCards([...cards, response.data]);
      setInputDataTask({ title: '', description: '', status: '' });
    }
  };

  const handleEditTask = async (data: any) => {
    await editTask(String(updateTask.id), data);
    const index = cards.findIndex((card) => card.id === updateTask.id);
    const newCards = [...cards];
    newCards[index] = {
      ...newCards[index],
      title: data.title,
      description: data.description,
    };
    setCards(newCards);
    setInputDataTask({ title: '', description: '', status: '' });
    setIsCreate(true);
  };

  const formik = useFormik({
    initialValues: inputDataTask,
    validationSchema: boardSchema,
    onSubmit: (values) => {
      isCreate
        ? handleSaveNewTask({ title: values.title, description: values.description })
        : handleEditTask({ title: values.title, description: values.description });
    },
    enableReinitialize: true,
  });
  return (
    <div className="w-full flex-col flex justify-center items-center pb-24">
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto container flex items-center justify-center gap-x-4"
      >
        <div className="flex gap-x-4 h-[74px] w-[900px]">
          <div className="w-full">
            <Input.Root>
              <Input.Label text="Titulo" htmlFor="title" />
              <Input.CustomInput
                className="w-[300px]"
                id="title"
                name="title"
                type="text"
                placeholder="Titulo"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </Input.Root>
            {formik.errors.title && formik.touched.title && (
              <span className="text-orange-600 text-xs">{formik.errors.title}</span>
            )}
          </div>
          <div className="w-full">
            <Input.Root>
              <Input.Label text="Descrição" htmlFor="description" />
              <Input.CustomInput
                className="w-[530px]"
                name="description"
                id="description"
                type="text"
                placeholder="Descrição"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </Input.Root>
            {formik.errors.description && formik.touched.description && (
              <span className="text-orange-600 text-xs">{formik.errors.description}</span>
            )}
          </div>
        </div>

        <div className={`flex items-end h-[60px] ${!isCreate ? 'gap-x-3' : ''}`}>
          <button
            type="submit"
            className={`inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 
              transition-colors duration-150 ${
                isCreate ? 'bg-primary-600' : 'bg-yellow-600'
              } rounded-lg 
              focus:shadow-outline ${
                isCreate ? 'hover:bg-primary-700' : 'hover:bg-yellow-700'
              }`}
          >
            {isCreate ? (
              <PlusIcon className="h-6 w-6" />
            ) : (
              <ArrowPathIcon className="h-6 w-6" />
            )}
          </button>
          {!isCreate && (
            <button
              onClick={() => {
                setInputDataTask({ title: '', description: '', status: '' });
                setIsCreate(true);
              }}
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 
                transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline 
                  hover:bg-red-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
      </form>
      <div className="flex justify-center mt-10 gap-x-8">
        <Column
          title="A fazer"
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

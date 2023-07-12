import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

export function ModalConfirmation() {
  const { open, setOpen, deleteTask, taskIdDelete, setCards, cards } =
    useContext(TodoContext);

  const handleDeleteTask = () => {
    try {
      deleteTask(String(taskIdDelete));
      setCards(cards.filter((card) => card.id !== Number(taskIdDelete)));
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    open && (
      <div
        className="bg-slate-800 bg-opacity-30 flex justify-center
         items-center absolute top-0 right-0 bottom-0 left-0"
      >
        <div className="bg-gray-600 px-16 py-14 rounded-md text-center">
          <h1 className="text-xl mb-4 font-bold text-slate-100">
            Tem certeza que deseja excluir este item?
          </h1>
          <button
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-md text-white"
            onClick={() => setOpen(false)}
          >
            Não
          </button>
          <button
            onClick={handleDeleteTask}
            className="bg-primary-600 hover:bg-primary-700 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
          >
            Sim
          </button>
        </div>
      </div>
    )
  );
}

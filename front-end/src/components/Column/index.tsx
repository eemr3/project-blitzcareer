import React from 'react';

import Card from '../Card';
import { DataTasks } from '../../shared/interface/data-tasks';

type ColumnProps = {
  title: string;
  status: string;
  cards: DataTasks[];
  onDrop: (event: React.DragEvent<HTMLDivElement>, newStatus: string) => void;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, cardId: string) => void;
};

const Column: React.FC<ColumnProps> = ({ title, status, cards, onDrop, onDragStart }) => {
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className={`flex flex-col bg-gray-700 min-h-[212px] w-[320px] rounded-lg p-4`}
      onDragOver={handleDragOver}
      onDrop={(event) => onDrop(event, status)}
    >
      <h2 className="text-2xl font-bold mb-4 capitalize text-white">{title}</h2>
      {cards.map((card) => (
        <Card key={card.id} card={card} onDragStart={onDragStart} />
      ))}
    </div>
  );
};

export default Column;

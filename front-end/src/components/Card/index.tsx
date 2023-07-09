import React from 'react';

export type CardProps = {
  card: {
    id?: number;
    title: string;
    description: string;
    status: string;
  };
  onDragStart: (event: React.DragEvent<HTMLDivElement>, cardId: string) => void;
};

const Card: React.FC<CardProps> = ({ card, onDragStart }) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    if (!card?.id) return;
    onDragStart(event, card?.id?.toString());
  };

  return (
    <div
      className={`${
        card.status === 'pending'
          ? 'bg-blue-300'
          : card.status === 'in-progress'
          ? 'bg-orange-300'
          : 'bg-green-300'
      } rounded-lg p-4 mb-4 shadow-md cursor-grab active:cursor-grabbing`}
      draggable
      onDragStart={handleDragStart}
    >
      <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
      <p className="text-gray-500">{card.description}</p>
    </div>
  );
};

export default Card;

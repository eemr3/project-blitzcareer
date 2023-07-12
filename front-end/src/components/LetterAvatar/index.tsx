import React from 'react';
import { randomColor } from '../../shared/random-color';

interface LetterAvatarProps {
  name: string;
}
export const LetterAvatar = ({ name }: LetterAvatarProps) => {
  // const initials = name
  //   .split(' ')
  //   .map((word: string) => word.charAt(0))
  //   .join('');

  return (
    <div
      className="flex justify-center items-center w-12 h-12 rounded-full 
      text-white font-bold text-xl uppercase"
    >
      {name
        .split(' ')
        .map((word: string) => word.charAt(0))
        .join('')}
    </div>
  );
};

import React from 'react';

interface ButtonsLoginProps {
  className?: string;
  onClick?: () => void;
  link?: string;
  text: string;
}

export const Buttonslogin: React.FC<ButtonsLoginProps> = ({
  className,
  onClick,
  link,
  text
}) => {
  const baseStyles =
    'relative px-5 py-2 rounded-md font-semibold transition-colors duration-300 shadow-md';
  const gradientStyles =
    'bg-gradient-to-r from-[#3d393e] to-[#63707b] text-white hover:from-[#52525c] hover:to-[#728a8e]';
  const combinedStyles = `${baseStyles} ${gradientStyles} ${className || ''}`;

  if (link) {
    return (
      <a href={link} className={combinedStyles} onClick={onClick}>
        {text}
      </a>
    );
  }

  return (
    <button className={combinedStyles} onClick={onClick}>
      {text}
    </button>
  );
};

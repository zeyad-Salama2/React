import React, { ReactNode } from 'react';

interface GridContainerProps {
  cols: number;
  children: ReactNode;
  className?: string;
}

const gridClasses: { [key: number]: string } = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'md:grid-cols-10 lg:grid-cols-12',
};

const GridContainer = ({ cols, children, className }: GridContainerProps) => {
  const selectedGridClass = gridClasses[cols] || 'grid-cols-1';
  return (
    <div className={`grid ${selectedGridClass} ${className ? className : ''}`}>
      {children}
    </div>
  );
};

export default GridContainer;
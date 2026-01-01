
import React from 'react';

interface PageIndicatorsProps {
  total: number;
  current: number;
}

const PageIndicators: React.FC<PageIndicatorsProps> = ({ total, current }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-3 py-2">
      {Array.from({ length: total }).map((_, idx) => (
        <div
          key={idx}
          className={`h-2 rounded-full transition-all duration-500 ease-out ${
            idx === current 
              ? 'w-8 bg-primary' 
              : 'w-2 bg-gray-300 dark:bg-[#326744]'
          }`}
        />
      ))}
    </div>
  );
};

export default PageIndicators;

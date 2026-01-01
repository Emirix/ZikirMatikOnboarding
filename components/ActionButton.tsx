
import React from 'react';

interface ActionButtonProps {
  isLastStep: boolean;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ isLastStep, onClick }) => {
  return (
    <div className="flex w-full max-w-sm px-2">
      <button
        onClick={onClick}
        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-5 bg-primary hover:bg-[#10d650] active:scale-[0.97] transition-all text-[#112217] text-xl font-extrabold leading-normal tracking-[0.015em] shadow-xl shadow-primary/20 group relative"
      >
        <span className="truncate mr-2">
          {isLastStep ? 'Hadi Başlayalım' : 'İleri'}
        </span>
        <span className="material-symbols-outlined text-[24px] font-bold group-hover:translate-x-2 transition-transform duration-300">
          {isLastStep ? 'check_circle' : 'arrow_forward'}
        </span>
        
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </button>
    </div>
  );
};

export default ActionButton;

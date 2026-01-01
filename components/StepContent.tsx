
import React from 'react';
import { OnboardingStep } from '../types';

interface StepContentProps {
  step: OnboardingStep;
}

const StepContent: React.FC<StepContentProps> = ({ step }) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Image Section */}
      <div className="w-full px-8 flex justify-center mb-10">
        <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
          {/* Decorative Glow */}
          <div 
            className="absolute inset-0 blur-[60px] rounded-full transform scale-90 transition-all duration-700"
            style={{ backgroundColor: step.glowColor }}
          ></div>
          
          {/* Illustration Container */}
          <div 
            className="w-full h-full bg-center bg-cover bg-no-repeat z-10 drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden border border-white/5"
            style={{ backgroundImage: `url("${step.imageUrl}")` }}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center text-center px-6 max-w-sm mx-auto">
        <h1 className="text-gray-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight pb-3">
          {step.title} <span className="text-primary">{step.highlight}</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default StepContent;

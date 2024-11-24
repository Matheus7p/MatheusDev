import React from 'react';

const DownArrow: React.FC = () => {
  return (
    <div className="flex justify-center items-center animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#0c3b5e"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};

export default DownArrow;

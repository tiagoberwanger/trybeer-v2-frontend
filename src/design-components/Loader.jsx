import React from 'react';

function Loader() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex space-x-3">
        <div className="w-5 h-5 bg-yellow-300 rounded-full animate-bounce" />
        <div className="w-5 h-5 bg-yellow-300 rounded-full animate-bounce" />
        <div className="w-5 h-5 bg-yellow-300 rounded-full animate-bounce" />
      </div>
    </div>
  );
}

export default Loader;

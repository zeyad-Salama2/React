import React from 'react';

const Logo = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 rounded-xl shadow-lg px-1 py1 mb-3">
      <h1 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg mb-1">
        Edu
      </h1>
      <span className="text-xl font-semibold text-white/80 tracking-widest">
        Tunnel
      </span>
      <div className="w-10 h-1 bg-white/40 rounded-full mt-3" />
    </div>
  );
};

export default Logo;
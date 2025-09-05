import React from 'react';

const Logo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-r from-[#3d393e] to-[#63707b] rounded-xl shadow-xl px-4 py-3 mb-4 w-fit">
      <h1 className="text-5xl font-extrabold text-white tracking-wide drop-shadow-lg mb-1">
        Edu
      </h1>
      <span className="text-2xl font-semibold text-white/80 tracking-widest">
        Tunnel
      </span>
      <div className="w-12 h-1 bg-white/30 rounded-full mt-3" />
    </div>
  );
};

export default Logo;

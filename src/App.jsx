import React from 'react';

function App() {
  return (
    <div className="relative z-10 container mx0-auto  px-4 py-8 m-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')", filter: 'blur(10px)' }}
      >
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40'></div>
        <div className='absolute inset-0 bg-black-20'></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 ">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight">
              Rain
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Check
              </span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto loading-relaxed">
              RainCheck provides real-time weather forecasts with accurate
              updates, helping you stay prepared for any condition throughout
              the day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

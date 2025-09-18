import React from 'react';

function App() {
  return (
    <div className="relative z-10 container mx0-auto  px-4 py-8 m-h-screen">
      <div className='absolute inset-0 bg-cover bg-center bg-no-repeat' style={{backgroundImage: "url('https://www.freepik.com/free-ai-image/beautiful-sea-landscape-with-water-nature_137488573.htm#fromView=keyword&page=3&position=20&uuid=6d2d3286-8d08-47e8-a0a1-593518be110e&query=Anime+weather')"}}>
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

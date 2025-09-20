import { MapPin } from 'lucide-react';

function WeatherCard() {
  return (
    <div
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/15
    transition-all duration-300"
    >
      <div className="flex items-centerj justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/10 rounded-full">
            <MapPin className="w-5 h-5 text-white/80 " />
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg">Weather Name</h2>
            <p className="text-white/60 text-sm">Weather City</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-white/70 texm-sm"></div>
          <div className="text-white/50 texm-sx"></div>
        </div>
      </div>
      <div className="flex items-center justify-between b-10">
        <div className="flex-1">
          <div className="text-7xl font-bold text-white mb-3 tracking-tight">
            Main Temp
          </div>
          <div className="text-white/90 text-xl capitalize mb-2 font-semibold">
            Weather Description
          </div>
          <div className="flex items-center space-x-4 text-white/40 text-sm ">
            <span>Max Temp</span>
            <span>Min Temp</span>
          </div>
        </div>
        <div className="textwhite/90 tansform hover:scale-110 transition-transform duration-300"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group">
          <div className="flex items-center space-x-3 mb-2">
            <div
              className={
                'p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all'
              }
            ></div>
            <span className="text-white/70 text-sm font-medium">
              Stats Label
            </span>
          </div>
          <div className='text-white font-semibold text-lg pl-11'>
            Stats Value
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;

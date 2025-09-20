import ErrorMessage from './components/ErrorMessage';
import ForeCast from './components/ForeCast';
import LoadingSpinner from './components/LoadingSpinner';
import SearchBar from './components/SearchBar';
import TemperatureToggle from './components/TemperatureToggle';
import WeatherCard from './components/WeatherCard';


function App() {
  return (
    <div className="relative z-10 container mx0-auto  px-4 py-8 m-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')"}}
      >
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40'></div>
        <div className='absolute inset-0 bg-black-20'></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-8 m-h-screen">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 ">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight">
              Rain
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Check
              </span>
            </h1>
            <p className="text-white/80 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              RainCheck provides real-time weather forecasts with accurate
              updates, helping you stay prepared for any condition throughout
              the day
            </p>
          </div>
          <div>
            <div className='flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 mb-12'>
              <SearchBar />
              <TemperatureToggle />
            </div>
          </div>
          
          <div className='space-y-8'>
            <div className='flex justify-center'>
              <div className='bg-white/10 backdrop-blur-xl rounded-3xl p-8
              border border-white/20'>
                <LoadingSpinner />
                <p className='text-white/80 text-center mt-4 font-medium'>Fetching latest weather status.....</p>
              </div>
            </div>

            <div className='max-w-2xl mx-auto'>
              <ErrorMessage />
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-3 gap-8'>
              <div className='xl:col-span-2 '>
                <WeatherCard />
              </div>
              <div className='xl:cols-span-1'>
                <ForeCast />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;

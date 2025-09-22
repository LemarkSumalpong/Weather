import ErrorMessage from './components/ErrorMessage';
import WeatherForecast from './components/WeatherForecast';
import LoadingSpinner from './components/LoadingSpinner';
import SearchBar from './components/SearchBar';
import TemperatureToggle from './components/TemperatureToggle';
import WeatherCard from './components/WeatherCard';
import { useWeather } from './Hooks/UseWeather';

function App() {
  const {
    currentWeather,
    forecast,
    loading,
    error,
    unit,
    fetchWeatherByCity,
    fetchWeatherByLocation,
    toggleUnit,
  } = useWeather();

  const handleRetry = () => {
    if (currentWeather) {
      fetchWeatherByCity(currentWeather.name);
    } else {
      fetchWeatherByCity('Cagayan de Oro');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col px-4 py-4">
        <div className="max-w-7xl mx-auto flex-1 flex flex-col">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight">
              Rain
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Check
              </span>
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              RainCheck provides real-time weather forecasts with accurate updates, helping you stay prepared for any condition throughout the day
            </p>
          </div>

          {/* Search & Toggle */}
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6 mb-6">
            <SearchBar
              onSearch={fetchWeatherByCity}
              onlocationSearch={fetchWeatherByLocation}
              loading={loading}
            />
            <TemperatureToggle unit={unit} onToggle={toggleUnit} />
          </div>

          {/* Weather Content */}
          <div className="flex-1 flex flex-col space-y-6 overflow-hidden">
            {loading && (
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                  <LoadingSpinner />
                  <p className="text-white/80 text-center mt-4 font-medium">
                    Fetching latest weather status...
                  </p>
                </div>
              </div>
            )}

            {error && !loading && (
              <div className="max-w-2xl mx-auto">
                <ErrorMessage message={error} onRetry={handleRetry} />
              </div>
            )}

            {currentWeather && !loading && (
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 flex-1 overflow-hidden">
                <div className="xl:col-span-2">
                  <WeatherCard weather={currentWeather} unit={unit} />
                </div>
                <div className="xl:col-span-1 overflow-y-auto">
                  {forecast && <WeatherForecast forecast= {forecast} unit={unit} />}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import {
  MapPin,
  Sunrise,
  Sunset,
  Eye,
  Wind,
  Droplets,
  Gauge,
  Thermometer,
} from 'lucide-react';
import { formatTemperature, getWeatherIcon } from '../utils/weatherUtils';
import * as LucideIcons from "lucide-react";

function WeatherCard({ weather, unit }) {
  const iconName = getWeatherIcon(weather.weather[0]);
  const iconComponent = LucideIcons[iconName] || LucideIcons.Cloud;

  const weatherStats = [
     {icon: Eye,
     label: "Visibility",
     value: `${(weather.visibility / 1000).toFixed(1)} km`,
     color: "text-blue-300",
    },
     {icon: Wind,
     label: "Wind Speed",
     value: `${weather.wind.speed.toFixed(1)} m/s`,
     color: "text-green-300",
    },
     {icon: Droplets,
     label: "Humidity",
     value: `${weather.main.humidity}%`,
     color: "text-cyan-300",
    },
     {icon: Gauge,
     label: "Pressure",
     value: `${weather.main.pressure} hPa`,
     color: "text-purple-300",
    },
     {icon: Thermometer,
     label: "Feels Like",
     value: `${formatTemperature(weather.main.feels_like, unit)}°${unit}`,
     color: "text-orange-300",
    },
  ]

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
        <div className="text-white/90 tansform hover:scale-110 transition-transform duration-300"></div>
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
          <div className="text-white font-semibold text-lg pl-11">
            Stats Value
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-400/20">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-orange-400/20 rounded-full">
              <Sunrise className="w-4 h-4 text-orange-300" />
            </div>
            <span className="text-white/80 text-sm font-medium">Sunrise</span>
          </div>
          <div className="text-white font-semibold text-lg pl-11"></div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-400/20">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-purple-400/20 rounded-full">
              <Sunset className="w-4 h-4 text-purple-300" />
            </div>
            <span className="text-white/80 text-sm font-medium">Sunset</span>
          </div>
          <div className="text-white font-semibold text-lg pl-11"></div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;

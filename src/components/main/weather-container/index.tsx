import { degToCompass } from "../../../utils/deg-to-compass";
import {
  HumidityIcon,
  PressureIcon,
  TempIcon,
  WindIcon,
} from "../../icons/index";
import Loading from "../../ui/loading";
import WeatherCard from "./weather-card";

const WeatherContainer: React.FC<any> = ({ data }: any) => {
  const { main, weather, wind } = data;
  if (main === undefined || weather.length === 0 || wind === undefined)
    return <Loading />;
  /*
    I created this simple weather data array 
    to mapping the weather card for 4 tiles 
    and organize the code
    =====================
  */
  const weather_data = [
    {
      title: "temperature",
      value: Math.floor(main.temp),
      unit: "\xB0C",
      Icon: <TempIcon className="w-8 h-8 text-blue-500" />,
      extra_details: [
        {
          title: "min",
          value: Math.floor(main.temp_min),
          unit: "\xB0C",
        },
        {
          title: "max",
          value: Math.floor(main.temp_max),
          unit: "\xB0C",
        },
      ],
    },
    {
      title: "wind",
      value: wind.speed,
      unit: "m/s",
      Icon: <WindIcon className="w-8 h-8 text-blue-500" />,
      extra_details: [
        {
          title: "direction",
          value: degToCompass(wind.deg),
          unit: null,
        },
      ],
    },
    {
      title: "humidity",
      value: main.humidity,
      unit: "%",
      Icon: <HumidityIcon className="w-8 h-8 text-blue-500" />,
      extra_details: [],
    },
    {
      title: "pressure",
      value: main.pressure,
      unit: "mb",
      Icon: <PressureIcon className="w-8 h-8 text-blue-500" />,
      extra_details: [],
    },
  ];
  return (
    <div className="flex items-center flex-col w-full space-y-6">
      <span className="overflow-hidden p-2 bg-gray-100 rounded-xl shadow-sm cursor-pointer hover:bg-gray-200 shadow-blue-200">
        <img
          src={`http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
          alt={weather[0]?.description}
          height={144}
          width={144}
          className="object-contain h-full"
        />
      </span>
      <div className="w-full max-w-2xl flex flex-wrap gap-4">
        {weather_data.map((weather, index) => (
          <WeatherCard key={weather.title} index={index} {...weather} />
        ))}
      </div>
    </div>
  );
};

export default WeatherContainer;

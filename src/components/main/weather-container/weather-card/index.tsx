import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

type IProps = {
  index: number;
  title: string;
  value: number;
  unit: string;
  Icon: JSX.Element | null;
  extra_details:
    | {
        title: string;
        value: any;
        unit: string | null;
      }[]
    | [];
};
const WeatherCard: React.FC<IProps> = ({
  title,
  value,
  unit,
  Icon,
  extra_details,
  index,
}) => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 1000, offset: -1000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={(index + 1) * 100}
      className="rounded-md flex-1 min-w-[200px] flex flex-col p-5 hover:bg-gray-200 duration-200 transition-all ease-in cursor-pointer text-center bg-gray-100 border-b-4 border-blue-400 shadow-md shadow-blue-200">
      <div className="w-full flex items-center justify-center h-8 mb-4">
        {Icon}
      </div>
      <h3 className="text-2xl font-medium tracking-wide text-gray-500">
        {t(title).charAt(0).toLocaleUpperCase() + t(title).slice(1)}
      </h3>
      <div className="flex w-full items-center justify-center">
        <span className="my-3 mx-2">
          <span className="text-3xl font-semibold">{value}</span>
          <span className="text-xl text-gray-500"> {t(unit)}</span>
        </span>
      </div>
      {extra_details.length > 0 && (
        <ul className="max-w-[200px] w-full mx-auto">
          {extra_details.map(({ title, value, unit: _unit }) => (
            <li key={title} className="mt-2 w-full">
              <div className="flex justify-between items-center py-1">
                <span className="text-pink-600 font-medium text-lg">
                  {t(title)}:
                </span>
                <div>
                  <span className="text-lg font-semibold">{value}</span>
                  {_unit && <span className="text-gray-500"> {t(_unit)}</span>}
                </div>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WeatherCard;

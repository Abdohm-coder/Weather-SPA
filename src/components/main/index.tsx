import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../ui/loading";
import SelectUI from "../ui/select";
import WeatherContainer from "./weather-container";

function Main() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [countries, setCountries] = useState<any[] | undefined>();
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response?.data);
      try {
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      console.log(selectedCountry);
      const fetchWeather = async () => {
        const { latlng } = selectedCountry;
        try {
          /* 
            Handling the loading state when the data is still fetching
            ==========================================================
          */
          setIsLoading(true);
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${
              latlng[0]
            }&lon=${latlng[1]}&units=metric&appid=${
              /*process.env.REACT_APP_API_KEY*/ "9b7601c930430e1ae44aceafdcf08c06"
            }`
          );
          /* 
            I have puted the API ID directly instead of using envirenment variable
            ======================================================================
          */
          setWeather(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      };
      fetchWeather();
    }
  }, [selectedCountry]);

  return (
    <section className="w-11/12 mx-auto sm:w-screen min-h-[calc(100vh-14rem)] mt-8 pb-12">
      <div className="max-w-lg w-full mx-auto my-8">
        <SelectUI
          name="select-country"
          placeholder={t("select-country")}
          loadingMessage={() => t("loading")}
          label={t("select-country")}
          options={countries}
          isLoading={countries ? false : true}
          onChange={setSelectedCountry}
          defaultValue={selectedCountry}
          getOptionLabel={(option: any) =>
            language === "ar"
              ? option?.translations?.ara?.common
              : option?.name?.common
          }
          getOptionValue={(option: any) =>
            language === "ar"
              ? option?.translations?.ara?.common
              : option?.name?.common
          }
        />
      </div>
      <div className="mt-8 flex space-y-3 flex-col items-center">
        {selectedCountry && (
          <h1 className="text-2xl text-center text-gray-500 font-medium tracking-wide">
            {t("weather-right-now-in")}{" "}
            <strong className="text-black">
              {language === "ar"
                ? selectedCountry?.translations?.ara?.common
                : selectedCountry?.name?.common}
            </strong>
          </h1>
        )}
        {isLoading ? (
          <Loading width={30} height={30} />
        ) : (
          weather && <WeatherContainer data={weather} />
        )}
      </div>
    </section>
  );
}

export default Main;

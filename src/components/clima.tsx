import CurrentHour from "../hooks/usehours";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import { formatDate } from "../utils/formatDate";
import { useTranslation } from "react-i18next";

interface WeatherData {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface WeatherProps {
  weather: WeatherData;
}

function WeatherInformations({ weather }: WeatherProps) {
  const [t] = useTranslation();


  return (
    <div className="containerResultado">
      <div className="resultado">
        <form className="form1">
          <div className="dateActual">{formatDate(weather.date)}</div>
          <div className="hourActual">
            <CurrentHour />
          </div>
          <div className="botaoInfoArea">
            <div className="temperatureC">
              <h2>
                {Math.round(weather.temperatureC)}
                <TbTemperatureCelsius className="celsiusIcone" />
              </h2>
            </div>
            <div className="temperatureF">
              <h2>
                {Math.round(weather.temperatureF)}
                <TbTemperatureFahrenheit className="fahrenheitIcone" />
              </h2>
            </div>
          </div>
          <div className="summary">{t(weather.summary)}</div>
        </form>
      </div>
    </div>
  );
}

export default WeatherInformations;

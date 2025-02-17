import { AiOutlineSearch } from "react-icons/ai";
import api from "../services/Api";
import { useEffect, useState } from "react";
import WeatherInformations from "../components/clima";

interface WeatherData {
  date: number;
  temperatureC: number;
  temperatureF: number ;
  summary: string;
}

interface WeatherProps {
  weather: WeatherData;
}

function Home() {

  const [weather, setWeather] = useState<WeatherProps[]>([]);

  async function loadWeather() { 

    try {
      const response = await api.get('/GetTempo');
      console.log("Dados da API:", response.data);
      setWeather(response.data);
    } catch (error) {
      console.log("Erro:", error);
    }
  }

  useEffect(() => {
    loadWeather();
  }, []);

  return (
    <div className="containerGeral">
      <div className="containerBusca">
        <div className="buscarCidade">
          <div className="buscarBotao" onClick={loadWeather}>
            <AiOutlineSearch className="buscarIcone" />
          </div>
        </div>
      </div>
      {weather.length > 0 && weather.map((data, index) => (
        <WeatherInformations key={data.date} weather={data} />
      ))}
    </div>
  );
}

export default Home;

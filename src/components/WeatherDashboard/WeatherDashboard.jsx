import axios from "axios"
import { useEffect, useState } from "react"
import SearchInput from "../SearchInput/SearchInput"
import ShowTemp from "../ShowTemp/ShowTemp"
import './WeatherDashboard.css'

export default function WeatherDashboard() {

    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState("São Paulo")
    const [inputValue, setInputValue] = useState("")

    const API_KEY = '4c3843888c32de78e984759842ffeefd'

    const pressEnter = (event) => {
        if (event.key === "Enter") {
            setCity(inputValue)
        }
    }

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`)
            .then((response) => setWeather(response.data));
    }, [city])


    return (
        <div>
            {weather && weather.main ? (
                <div className="estiloGrafico">
                    <h1>{weather.name} - {weather.sys.country}</h1>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        textAlign: "center",
                        marginTop: "20px"
                    }}>
                        <div>
                            <p><strong>Clima:</strong></p>
                            <p>{weather.weather[0].description}</p>
                        </div>
                        <div>
                            <p><strong>Temperatura:</strong></p>
                            <p>{weather.main.temp}°C</p>
                        </div>
                        <div>
                            <p><strong>Umidade:</strong></p>
                            <p>{weather.main.humidity}%</p>
                        </div>
                        <div>
                            <p><strong>Vento:</strong></p>
                            <p>{weather.wind.speed} km/h</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Carregando dados...</p>
            )}
            <div style={{ padding: '20px' }}>
                <SearchInput
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onKeyDown={pressEnter} />
            </div>
            <div>
                <hr className="divisoria" />
                <h1 className="titulos-cidades">10 Cidades Mais Populosas</h1>
                <div className="cidades-container">
                    <div>
                        <ShowTemp cidade="Tóquio" />
                        <ShowTemp cidade="Deli" />
                        <ShowTemp cidade="Xangai" />
                        <ShowTemp cidade="Dhaka" />
                        <ShowTemp cidade="São Paulo" />
                    </div>
                    <div>
                        <ShowTemp cidade="Cairo" />
                        <ShowTemp cidade="Cidade do México" />
                        <ShowTemp cidade="Pequim" />
                        <ShowTemp cidade="Mumbai" />
                        <ShowTemp cidade="Osaka" />
                    </div>
                </div>
            </div>
        </div >
    )
}

import axios from "axios"
import { useEffect, useState } from "react"
import './ShowTemp.css'


export default function ShowTemp({ cidade }) {

    const [minTemp, setMinTemp] = useState(null)
    const [maxTemp, setMaxTemp] = useState(null)

    const API_KEY = '4c3843888c32de78e984759842ffeefd'

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`)
            .then((response) => {

                const lista = response.data.list;
                console.log("Lista de previsões:", lista);

                const previsoesHoje = lista.slice(0, 8);
                console.log("Previsões de hoje:", previsoesHoje);

                if (previsoesHoje.length > 0) {
                    const temperaturasHoje = previsoesHoje.map(item => item.main.temp)
                    const min = Math.min(...temperaturasHoje)
                    const max = Math.max(...temperaturasHoje)
                    setMinTemp(Math.round(min))
                    setMaxTemp(Math.round(max))
                } else {
                    console.warn("Nenhuma previsão para hoje.")
                    setMinTemp(null)
                    setMaxTemp(null)
                }
            })
            .catch(error => console.error("Erro ao buscar dados:", error))
    }, [cidade])


    if (minTemp === null || maxTemp === null) {
        return <p>Carregando {cidade}...</p>
    }

    return (
        <div className="show-temp">
            <div style={{ width: "80px" }}>
                <p style={{ margin: 0, fontWeight: "bold" }}>Min</p>
                <p style={{ margin: 0 }}>{minTemp}°</p>
            </div>
            <div style={{ width: "80px" }}>
                <p style={{ margin: 0, fontWeight: "bold" }}>Max</p>
                <p style={{ margin: 0 }}>{maxTemp}°</p>
            </div>
            <div className="cidade-nome">
                <p style={{ margin: 0, fontWeight: "bold" }}>{cidade}</p>
            </div>
        </div>
    )
}

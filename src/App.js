import './App.css';
import WeatherDashboard from './components/WeatherDashboard/WeatherDashboard';


export default function App() {

  const estiloContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const estiloTitulo = {
    fontFamily: 'Orbitron, sans-serif',
    fontSize: '3rem',
    color: "#fff"
  }

  return (
    <div style={{background: 'linear-gradient(to bottom, #ff7e00, #ffb300, #ffd500)',minHeight: "100dvh",width: "100%",overflowX: "hidden"}}>
      <div style={estiloContainer}>
        <h1 style={estiloTitulo}>Previsão do Tempo</h1>
        <WeatherDashboard />
      </div>
    </div>
  );
}


import './App.css';
import ListaMascotas from './components/ListaMascotas';
import Mascota from './components/Mascota';
import {useState} from 'react';


async function obtenerMascotasAPI () {
  const response = await fetch('https://huachitos.cl/api/animales');
  const data = response.json();
  return data.data;
}


function App() {
  const [infoMascotas, setInfoMascotas] = useState([]);
  
  const cargarMascotas = async () => {
    try {
      const data = await obtenerMascotasAPI(); // Esperar la respuesta de la API
      setInfoMascotas(data); // Actualizar el estado con los datos recibidos
    } catch (error) {
      console.error('Error al obtener los datos de la API', error);
    }
  };

   
  return (
    <div className="App">
      <button onClick={cargarMascotas}>Cargar Mascotas</button>
      {infoMascotas.map((mascota, index) => (
          <Mascota key={index} infoMascota={mascota} />
        ))
      }
    </div>
  );
}

export default App;

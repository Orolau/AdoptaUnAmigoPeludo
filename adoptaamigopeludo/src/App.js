import './App.css';
import ListaMascotas from './components/ListaMascotas';
import Filtro from './components/Filtro'
import {useState, useEffect} from 'react';


async function obtenerMascotasAPI () {
  const response = await fetch('https://huachitos.cl/api/animales');
  const data = await response.json();
  return data.data;
}


function App() {
  const [infoMascotas, setInfoMascotas] = useState([]);
  const [mascotasFiltradas, setMascotasFiltradas] = useState([]);

  const cargarMascotas = async () => {
    try {
      const data = await obtenerMascotasAPI(); // Esperar la respuesta de la API
      setInfoMascotas(data); // Actualizar el estado con los datos recibidos
      setMascotasFiltradas(data);
    } catch (error) {
      console.error('Error al obtener los datos de la API', error);
    }
  };

  const aplicarFiltros = (listaMascotas) =>{
    setMascotasFiltradas(listaMascotas);
  }

  useEffect(() => {
    cargarMascotas(); 
  }, []);

  return (
    <div className="App">
      
      <Filtro listaMascotas={infoMascotas} funcionMostrarMascotas={aplicarFiltros}/>
      {
        mascotasFiltradas.length > 0 ? 
        <ListaMascotas  listaMascotas={mascotasFiltradas}/> 
        : <p>No se han encontrado máscotas que cumplan los requisitos</p>

      }
    </div>
  );
}

export default App;

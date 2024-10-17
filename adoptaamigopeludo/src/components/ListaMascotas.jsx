import {useState} from 'react';
import Mascota from './Mascota';

const ListaMascotas = () =>{
    const [infoMascota, setInfoMascota] = useState([]);

    async function obtenerMascotasAPI () {
        const response = await fetch('https://huachitos.cl/api/animales');
        const data = response.json();
        setInfoMascota(data.data);
    }

    return(
        <div onLoad={obtenerMascotasAPI}>
            <button onClick={obtenerMascotasAPI}>cargar mascotas</button>
            {infoMascota.map((mascota, index) => {
                return <Mascota key={index} infoMascota={mascota}/>
            })}
        </div>
    )
}
export default ListaMascotas;
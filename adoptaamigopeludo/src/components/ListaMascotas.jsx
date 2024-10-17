import Mascota from './Mascota';
import './styles/estiloLista.css';

const ListaMascotas = ({listaMascotas}) =>{

    return(
        <div  className="lista-mascotas">
            {listaMascotas.map((mascota, index) => {
                return <Mascota key={index} infoMascota={mascota}/>
            })}
        </div>
    )
}
export default ListaMascotas;
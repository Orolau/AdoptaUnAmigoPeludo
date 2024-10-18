import Mascota from './Mascota';
import './styles/estiloLista.css';

const ListaMascotas = ({listaMascotas, setMuestraFormulario}) =>{

    return(
        <div  className="lista-mascotas">
            {listaMascotas.map((mascota, index) => {
                return <Mascota key={index} infoMascota={mascota} muestraFormulario={setMuestraFormulario}/>
            })}
        </div>
    )
}
export default ListaMascotas;
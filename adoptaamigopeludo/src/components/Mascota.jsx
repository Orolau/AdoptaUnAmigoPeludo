import ChipGenero from './chipGenero';
import ChipTipo from './chipTipo';
import './styles/estiloTarjetaMascotas.css'

const Mascota = ({infoMascota, muestraFormulario}) =>{

    return (
        <div className='tarjetaMascota'>
            <img src={infoMascota.imagen} className='fotoMascota' alt={infoMascota.nombre}/>
            <h2>{infoMascota.nombre}</h2>
            <div className='primeraLineaInfoMascota'>
                <ChipTipo tipo={infoMascota.tipo}/>
                <ChipGenero genero={infoMascota.genero}/>
            </div>
            <h3>Descripción</h3>
            <ul>
                <li>{infoMascota.edad}</li>
                {infoMascota.esterilizado ?
                    <li>Esterilizado</li>
                    :<li>No esterilizado</li>}
                {infoMascota.vacunas ?
                    <li>Vacunado</li>
                    :<li>No vacuando</li>}
                <li>{infoMascota.region}, {infoMascota.comuna}</li>
                <li><a href={infoMascota.url} target="_blank" rel="noopener noreferrer">Más información</a></li>
            </ul>

            <button onClick={muestraFormulario}>Adoptar</button>
        </div>
    )

}
export default Mascota;
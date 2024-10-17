import './styles/estiloTarjetaMascotas.css'

const Mascota = ({infoMascota}) =>{

    return (
        <div>
            <img src={infoMascota.imagen} className='fotoMascota' alt={infoMascota.nombre}/>
            <h2>{infoMascota.nombre}</h2>
            <h3>{infoMascota.tipo}</h3>
            <h3>Descripción</h3>
            <ul>
                <li>{infoMascota.edad}</li>
                <li>{infoMascota.color}</li>
                <li>{infoMascota.estado}</li>
                <li>{infoMascota.genero}</li>
                <li>{infoMascota.desc_fisica}</li>
                <li>{infoMascota.desc_personalidad}</li>
                <li>{infoMascota.desc_adicional}</li>
                {infoMascota.esterilizado ?
                    <li>Esterilizado</li>
                    :<li>No esterilizado</li>}
                {infoMascota.vacunas ?
                    <li>Vacunado</li>
                    :<li>No vacuando</li>}
                <li>{infoMascota.equipo}</li>
                <li>{infoMascota.region}</li>
                <li>{infoMascota.comuna}</li>
                <li><a href={infoMascota.url} target="_blank" rel="noopener noreferrer">Más información</a></li>
            </ul>
        </div>
    )

}
export default Mascota;
import {useState} from 'react';
import './styles/estiloFiltro.css'

const Filtro = ({funcionMostrarMascotas,listaMascotas}) =>{
    const [filtroTipo, setFiltroTipo] = useState('');
    const [filtroEdad, setFiltroEdad] = useState(0);
    const [filtroGenero, setFiltroGenero] = useState('');
    const [filtroVacunado, setFiltroVacunado] = useState(false);
    const [filtroEsterilizado, setFiltroEsterilizado] = useState(false);

    const aplicarFiltro = (event) =>{
        event.preventDefault();
        const mascotasFiltradas = listaMascotas.filter(mascota =>{
            const cumpleTipo = filtroTipo ? mascota.tipo === filtroTipo : true;
            const cumpleGenero = filtroGenero ? mascota.genero === filtroGenero : true;

            const edadMascota = convertirEdad(mascota.edad);
            const cumpleEdad = filtroEdad ? edadMascota <= filtroEdad : true;

            const cumpleVacunado = filtroVacunado ? mascota.vacunas === 1: true;
            const cumpleEsterilizado = filtroEsterilizado ? mascota.esterilizado === 1 : true;


            return cumpleTipo && cumpleGenero && cumpleEdad && cumpleVacunado && cumpleEsterilizado;
        });
        console.log({ filtroTipo, filtroEdad, filtroGenero, filtroVacunado, filtroEsterilizado });
        console.log(mascotasFiltradas.data); // Mostrar la lista de mascotas filtradas

        funcionMostrarMascotas(mascotasFiltradas);
    }

    // Convierte edad en texto a un número aproximado en años
    const convertirEdad = (edadTexto) => {
        if (edadTexto.includes('año')) {
            
        const anhos = parseInt(edadTexto); 
        return isNaN(anhos) ? 0 : anhos; 
        } else if (edadTexto.includes('meses')) {
        const meses = parseInt(edadTexto);
        return isNaN(meses) ? 0 : meses / 12;
        } else if (edadTexto.toLowerCase().includes('cachorro')) {
        return 0.5; // Asumimos que un "cachorro" es menor de un año
        } else if (edadTexto.toLowerCase().includes('adulto')) {
        return 5; // Asumimos que un "adulto" es alrededor de 5 años
        } else if (edadTexto.toLowerCase().includes('anciano')) {
        return 8; // Asumimos que un "anciano" es mayor de 8 años
        }
        
        return 0; // Si no coincide con nada, devolvemos 0 años por defecto
    }
  

    return(
        <div className="filtro-container">
            <form onSubmit={aplicarFiltro}>
                <label>Tipo</label>
                <select value={filtroTipo} onChange={e => setFiltroTipo(e.target.value)}>
                <option value="">Todos</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                </select>

                <label>Edad (Años): {filtroEdad}</label> {/* Mostrar el valor actual */}
                <input type="range" min={0} max={20} value={filtroEdad} onChange={e => setFiltroEdad(e.target.value)} />
                <label>Género</label>
                <select value={filtroGenero} onChange={e => setFiltroGenero(e.target.value)}>
                <option value="">Todos</option>
                <option value="hembra">Hembra</option>
                <option value="macho">Macho</option>
                </select>

                <input type="checkbox" id="filtroVacunado" onClick={e => setFiltroVacunado(e.target.checked)}/>
                <label htmlFor="filtroVacunado">Vacunado</label>

                <input type="checkbox" id="filtroEsterilizado" onClick={e => setFiltroEsterilizado(e.target.checked)}/>
                <label htmlFor="filtroEsterilizado">Esterilizado</label>

                <button type='submit'>Aplicar filtros</button>
            </form>
        </div>
    )

}
export default Filtro;
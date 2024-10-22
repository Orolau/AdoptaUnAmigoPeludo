import { useState } from 'react';
import './styles/estiloFormulario.css'

const FormAdopcion = ({ idMascota, muestraFormulario, setMuestraFormulario }) => {
    const [mostrar, setMostrar] = useState(true);

    const [datosPersona, setDatosPersona] = useState({
        nombre: "",
        apellidos: "",
        ubicacion: "",
        email: "",
        telefono: "",
        otrasMascotas: ""
    });

    const handleOnChange = (event, field) => {
        setDatosPersona({
            ...datosPersona,
            [field]: event.target.value
        });
    }

    const mandarDatosPersona = () => {
        //Aquí se enviaría una solicitud de adopción a la organización
        setMostrar(!mostrar);
        console.log(`Adoptando a `, idMascota);
        console.log(`Datos del adoptante: `, datosPersona);
    }

    const ocultarFormulario = () => {
      setMuestraFormulario(false); // Cambia el estado a "false" para ocultar el formulario
    };

    return (
        <div className='formularioAdopcion'>
            {
                muestraFormulario && (
                mostrar ?(
                    <form onSubmit={mandarDatosPersona}>
                        <button className="cerrarFormulario" onClick={ocultarFormulario}>X</button>
                        <label>Nombre</label>
                        <input type="text" onChange={(event => handleOnChange(event, 'nombre'))} required />
                        <label>Apellidos</label>
                        <input type="text" onChange={(event => handleOnChange(event, 'apellidos'))} required />
                        <label>Ubicación</label>
                        <input type="text" onChange={(event => handleOnChange(event, 'ubicacion'))} required />
                        <label>Email</label>
                        <input type="email" onChange={(event => handleOnChange(event, 'email'))} required />
                        <label>Teléfono</label>
                        <input type="number" onChange={(event => handleOnChange(event, 'telefono'))} required />
                        <label>Otras mascotas</label>
                        <input type="text" onChange={(event => handleOnChange(event, 'otrasMascotas'))} />

                        <button type='submit'>Adoptar</button>
                    </form>)
                    : (<div>
                        <button className="cerrarFormulario" onClick={ocultarFormulario}>X</button>
                        <h2>Se ha enviado la solicitud de adopción a la organización, pronto se pondrán en contacto con usted</h2>
                    </div>))
                
            }
        </div>
    )

}
export default FormAdopcion;
import {useState} from 'react';

const FormAdopcion = ({mandarDatosPersona}) =>{

    const [datosPersona, setDatosPersona] = useState({
        nombre: "",
        apellidos: "",
        ubicacion: "",
        email:"",
        telefono: ""
    });

    const handleOnChange = (event, field) =>{
        setDatosPersona({
            ...datosPersona,
            [field]:event.target.value
        });
    }

    return (
        <div>
            <form onSubmit={(event => mandarDatosPersona(datosPersona))}>
                <label>Nombre</label>
                <input type="text" onChange={(event => handleOnChange(event, 'nombre'))}/>
                <label>Apellidos</label>
                <input type="text" onChange={(event => handleOnChange(event, 'apellidos'))}/>
                <label>Ubicación</label>
                <input type="text" onChange={(event => handleOnChange(event, 'ubicacion'))}/>
                <label>Email</label>
                <input type="email" onChange={(event => handleOnChange(event, 'email'))}/>
                <label>Teléfono</label>
                <input type="number" onChange={(event => handleOnChange(event, 'telefono'))}/>
            </form>
        </div>
    )

}
export default FormAdopcion;
import './styles/estiloChipGenero.css';
const ChipTipo = ({tipo}) =>{

    return (
        <>
            <div>
                {
                    tipo === 'Gato' ?
                        <h3 className="chipGato">Gato</h3>
                        : (tipo === 'Perro' ?
                        <h3 className="chipPerro">Perro</h3>
                        :<h3 className="chipConejo">Conejo</h3>) 
                }
            </div>
        </>

    )

}
export default ChipTipo;
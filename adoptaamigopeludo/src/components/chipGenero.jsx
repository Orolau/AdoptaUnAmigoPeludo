import './styles/estiloChipGenero.css';
const ChipGenero = ({genero}) =>{

    return (
        <>
            <div className="chipGenero">
                {
                    genero === 'hembra' ?
                        <h3 className="chipHembra">Hembra</h3>
                        :<h3 className="chipMacho">Macho</h3>
                }
            </div>
        </>

    )

}
export default ChipGenero;
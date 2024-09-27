import Candidato from "./elementos/Candidato";
export default function GridCandidatos(props) {

    if (props?.listaCandidatos) {
        return (
            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                margin: '10px',
                padding: '10px',
                gap: '20px'
            }}>
                {props.listaCandidatos.map((candidato) => (
                    <Candidato key={candidato.id} 
                    candidato={candidato} 
                    setIdSelecionado={props.setIdSelecionado} 
                    setListaCandidatos={props.setListaCandidatos} 
                    listaCandidatos={props.listaCandidatos} 
                    setDetalharCandidato={props.setDetalharCandidato}/>
                ))}
            </div>
        )
    }
    else {
        return (<h1>Carregando...</h1>)
    }
}
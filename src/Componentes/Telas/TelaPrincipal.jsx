import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import {listaCandidatos} from "../../dados/candidatos";
export default function TelaPrincipal(props) {
    const [detalharCandidato, setDetalharCandidato]=useState(false);
    const [idSelecionado,setIdSelecionado] = useState(0);
    const [listaDeCandidatos,setListaCandidatos] = useState(listaCandidatos);
    return (

        <Pagina>
            {
                detalharCandidato ? (
                    <DetalhesCandidato 
                    setIdSelecionado={setIdSelecionado}
                    idSelecionado={idSelecionado}
                    setDetalharCandidato={setDetalharCandidato}  
                    listaCandidatos={listaDeCandidatos} 
                    setListaCandidatos ={setListaCandidatos}
                    />
                ) : (
                    <GridCandidatos 
                    listaCandidatos={listaDeCandidatos} 
                    setIdSelecionado={setIdSelecionado} 
                    setDetalharCandidato={setDetalharCandidato}  
                    setListaCandidatos ={setListaCandidatos}/>
                )
            }
        </Pagina>
    );
}
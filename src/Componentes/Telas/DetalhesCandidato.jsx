import { Container } from "react-bootstrap";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

export default function DetalhesCandidato(props) {
    const [candidato, setCandidato] = useState(escolheCandidato);
    function escolheCandidato() {
        let lista = props.listaCandidatos.filter((candidato) => {
            return candidato.id == props.idSelecionado
        })
        if (lista.length == 0) {
            return ({
                "id": 0,
                "vazio": "vazio"
            })
        }
        else
            return lista[0];
    }

    const [validated, setValidated] = useState(false);

    function handleSubmit(event) {
        const form = document.getElementById("form");
        const questao = document.getElementById(candidato.id).value;
        if (form.checkValidity()) {
            candidato.questionamentos.push(questao);
            props.setListaCandidatos(props.listaCandidatos.map((aux)=>{
                if(aux.id == candidato.id)
                    return candidato
                else
                    return aux;
            }))
            form.reset();
        }
        else
            setValidated(true);
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <Container>
            <h1 style={{ textAlign: "center" }}>Detalhes Candidato</h1>
            { //...
                <Container>
                    <Button onClick={()=>{
                        props.setDetalharCandidato(false);
                        props.setIdSelecionado(0);
                    }} style={{marginBottom:"10px"}}>Voltar aos Candidatos</Button>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Container>
                            <div><img src={candidato.avatar} alt={"Imagem do candidato" + candidato.nome} height="300" width="300" style={{ marginRight: "10px" }} /></div>
                            <div style={{marginTop:"10px"}}>
                                <ul>
                                    <li>Nome: {candidato.nome}</li>
                                    <li>E-mail: {candidato.email}</li>
                                    <li>Curtidas: {candidato.curtidas}</li>
                                    <li>Descurtidas: {candidato.descurtidas}</li>
                                </ul>
                            </div>
                        </Container>
                        <div>
                            {
                                candidato.propostas ?
                                    <Container>
                                        <h2>Propostas</h2>
                                        <ul>{
                                            candidato.propostas.map((proposta) => {
                                                return (
                                                    <li>{proposta}</li>
                                                )
                                            })}
                                        </ul>
                                    </Container> : <h2>O candidato em questão não possui propostas</h2>

                            }
                        </div>
                    </div>
                    <Container style={{ marginTop: "10px" }}>
                        <div style={{border: "solid 2px black", padding:"20px", borderRadius:"5px"}}>
                            <Form noValidate validated={validated} onSubmit={handleSubmit} id="form">
                                <Row className="mb-3">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Deixe Aqui sua questão para nosso candidato</Form.Label>
                                        <Form.Control as="textarea" rows={3} required id={candidato.id} />
                                        <Form.Control.Feedback type="invalid">
                                            VOCÊ DEVE INFORMAR A MENSAGEM!!!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3" style={{ backgroundColor: "lightgray", borderRadius: "10px", paddingLeft: "5px" }}>
                                    <Form.Check
                                        required
                                        label={"Concordo em publicar meu(s) questionamento(s) ao candidato(a) " + candidato.nome}
                                        feedback="VOCÊ DEVE CONFIRMAR CIENCIA DE QUE SUA PERGUNTA SERÁ PUBLICADA"
                                        feedbackType="invalid"

                                    />
                                </Form.Group>
                                <Button type="submit" variant="outline-primary">Publicar Questionamento</Button>
                            </Form>
                        </div>
                        <div style={{marginTop:"20px"}}>
                            {
                                candidato.questionamentos.length > 0 ?
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Questões</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                            candidato.questionamentos.map((questao)=>{
                                                return(
                                                    <tr>
                                                        <td>{questao}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </Table> : <h2 style={{ textAlign: "center" }}>Não foram feitas perguntas ao candidato!!!</h2>
                            }
                        </div>
                    </Container>
                </Container>

            }
        </Container>
    );
}
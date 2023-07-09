import { useParams, useNavigate } from "react-router-dom";
import useResenhas from "../hooks/useResenhas";
import Resenha from '../interfaces/Resenha';
import { Card, Button } from 'react-bootstrap';
import useRemoverResenha from "../hooks/useRemoverResenha";
import useLivroPorId from "../hooks/useLivroPorId";

interface ResenhaProp {
    resenha: Resenha;
    handleRemoverResenha: (id: number) => void;
}

const ResenhaCard = (props: ResenhaProp) => {
   
    const id = props.resenha!.id;
    const texto = props.resenha!.texto;
    const autor = props.resenha!.autor;

    return (
        <>
            <Card style={{marginLeft:'2rem', marginRight: '2rem'}}>
                <Card.Body>
                    <Card.Title>Resenha #{id}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Por <i>{autor}</i></Card.Subtitle>
                    <Card.Text>
                        {texto}
                    </Card.Text>
                    <div style={{display: "flex"}}>
                        <Button onClick={() => props.handleRemoverResenha(id!)} size="sm" className="mr-5" variant="danger">Remover</Button>&nbsp;&nbsp;
                        <Button size="sm" className="ml-2">Alterar</Button>
                    </div>
                </Card.Body>
            </Card>
            <br></br>
        </>
    )

}


const ResenhasPage = () => {

    let { id } = useParams();
    const response = useResenhas(id);
    const resenhas = response.data ? response.data as Resenha[]: [] as Resenha[];
    const res = useLivroPorId(id);
    const livro = res.data;
    const tituloDoLivro = livro ? livro.nome : "" ;
    const autorDoLivro = livro ? livro.autor : "";
    const idLivro = livro ? livro.id : "";

    const removerResenha = useRemoverResenha();

    const navigate = useNavigate();

    const handleRemoverResenha = (id: number) => {
        removerResenha.mutate(id);
    }

    const handleClickNovaResenha = () => {
        navigate(`/novaresenha/${idLivro}`);
    }

    return (
        <>
            <br></br>
            <div className="align-center text-center">
                <h2>{tituloDoLivro}</h2>
                <h3><i>{autorDoLivro}</i></h3>
            </div>
            <br></br>
            {resenhas.map(resenha => resenha ? <ResenhaCard resenha={resenha} handleRemoverResenha={handleRemoverResenha}/> : "")}

            <br></br>   
            <Button onClick={handleClickNovaResenha} style={{marginLeft:'2rem'}} className="btn btn-primary btn-lg register-button">Nova resenha</Button>
        </>
    );
};

export default ResenhasPage;
import { useParams } from "react-router-dom";
import useResenhas from "../hooks/useResenhas";
import Resenha from '../interfaces/Resenha';
import { Card, Button } from 'react-bootstrap';
import useRemoverResenha from "../hooks/useRemoverResenha";

interface ResenhaProp {
    resenha: Resenha;
}

const ResenhaCard = (props: ResenhaProp) => {
   
    const id = props.resenha!.id;
    const texto = props.resenha!.texto;
    const autor = props.resenha!.autor;

    const removerResenha = useRemoverResenha();

    const handleRemoverResenha = (id: number) => {
        removerResenha.mutate(id);
    }

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
                        <Button onClick={() => handleRemoverResenha(id!)} size="sm" className="mr-5" variant="danger">Remover</Button>&nbsp;&nbsp;
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
    const livro = resenhas[0] ? resenhas[0].livro : {nome:"",autor:""};
    const tituloDoLivro = livro ? livro.nome : "" ;
    const autorDoLivro = livro ? livro.autor : "";

    return (
        <>
            <br></br>
            <div className="align-center text-center">
                <h2>{tituloDoLivro}</h2>
                <h3><i>{autorDoLivro}</i></h3>
            </div>
            <br></br>
            {resenhas.map(resenha => resenha ? <ResenhaCard resenha={resenha} /> : "")}
        </>
    );
};

export default ResenhasPage;
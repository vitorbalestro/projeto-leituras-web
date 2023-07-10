import { useParams, useNavigate } from "react-router-dom";
import useResenhas from "../hooks/useResenhas";
import Resenha from '../interfaces/Resenha';
import { Card, Button } from 'react-bootstrap';
import useRemoverResenha from "../hooks/useRemoverResenha";
import useLivroPorId from "../hooks/useLivroPorId";
import React, { useState } from 'react';
import UpdateResenhaForm from '../components/UpdateResenhaForm';
import Livro from '../interfaces/Livro';
import Notification from '../components/Notification';

interface ResenhaProp {
    resenha: Resenha;
    handleRemoverResenha: (id: number) => void;
    setNotification: React.Dispatch<React.SetStateAction<string>>;
    setNotificationType: React.Dispatch<React.SetStateAction<string>>;
    livro: Livro
}

const ResenhaCard = (props: ResenhaProp) => {

   
    const id = props.resenha!.id;
    const texto = props.resenha!.texto;
    const autor = props.resenha!.autor;

    const [ showForm, setShowForm ] = useState(false);


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
                        <Button onClick={()=> setShowForm(!showForm)} size="sm" className="ml-2" variant={!showForm ? "primary":"warning"}>{!showForm ?"Alterar" : "Cancelar"}</Button>
                    </div>
                    
                    {showForm ? 
                    <>
                        <br></br>
                        <UpdateResenhaForm setShowForm={setShowForm} id={id!} autor={autor} livro={props.livro} setNotification={props.setNotification} setNotificationType={props.setNotificationType} /> 
                    </>
                    : 
                    <></>}
                </Card.Body>
            </Card>
            <br></br>
        </>
    )

}


const ResenhasPage = () => {

    const [notification, setNotification] = useState('')
    const [notificationType, setNotificationType] = useState('')

    let { id } = useParams();

    const removerResenha = useRemoverResenha();
    const navigate = useNavigate();
    const res = useLivroPorId(id);

    

    const {
        data: response,
        isLoading,
        error,
    } = useResenhas(id);

    
    if (isLoading || res.isLoading ) return <h6> Carregando... </h6>;

    if(error || res.error || !res || !response) throw error;

    const resenhas = response as Resenha[];
    
    const livro = res.data as Livro;
    const tituloDoLivro = livro ? livro.nome : "" ;
    const autorDoLivro = livro ? livro.autor : "";
    const idLivro = livro ? livro.id : "";


    const handleRemoverResenha = (id: number) => {
        if(window.confirm(`Remover Resenha #${id}?`)){
            removerResenha.mutate(id);
            if(!removerResenha.error) {
                setNotification(`Resenha removida com sucesso!`);
                setNotificationType('success');
    
                setTimeout(() => {
                    setNotification('');
                    setNotificationType('');
                },3000);
            }

            else {
                setNotification(`Erro ao remover resenha. Tente novamente.`);
                setNotificationType('error');
    
                setTimeout(() => {
                    setNotification('');
                    setNotificationType('');
                },3000);
            }
        }
    }

    const handleClickNovaResenha = () => {
        navigate(`/novaresenha/${idLivro}`);
    }

    return (
        <>
            <div className="container">
                <Notification message = {notification} notificationType = {notificationType} />
            </div>
            <br></br>
            <div className="align-center text-center">
                <h2>{tituloDoLivro}</h2>
                <h3><i>{autorDoLivro}</i></h3>
            </div>
            <br></br>
            {resenhas.map(resenha => resenha ? 
            <ResenhaCard livro={livro} 
                resenha={resenha} handleRemoverResenha={handleRemoverResenha} 
                setNotification={setNotification} setNotificationType={setNotificationType}/> 
            : "")}
            {resenhas.length === 0 ? 
                <>
                    <div className="align-center text-center mt-3 mb-3">
                        <h4>Ainda não há resenhas cadastradas.</h4>
                        <br></br>
                    </div>
                </>
                : <></>}
            <div className="mb-5">
            <Button onClick={handleClickNovaResenha} style={{marginLeft:'2rem'}} className="btn btn-primary btn-lg register-button">Nova resenha</Button>
            </div>
        </>
    );
};

export default ResenhasPage;
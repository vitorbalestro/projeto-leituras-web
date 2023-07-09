import { useParams } from 'react-router-dom';
import useLivroPorId from '../hooks/useLivroPorId';
import CadastroDeResenhaForm from '../components/CadastroDeResenhaForm';
import { useState } from 'react';
import Notification from '../components/Notification';

const NovaResenhaPage = () => {

    const [notification, setNotification] = useState('')
    const [notificationType, setNotificationType] = useState('')

    let { id } = useParams();

    const {
        data: response,
        isLoading,
        error
    } = useLivroPorId(id);

    if(isLoading) return <h6> Carregando... </h6>;

    if(error || !response) throw error;

    const livro = response;
    const nomeDoLivro = livro ? livro.nome : "";
    const autorDoLivro = livro ? livro.autor : "";
    

    return (
        <>
            <div className="container">
                <Notification message = {notification} notificationType = {notificationType} />
            </div>
            <br></br>
            <div className="align-center text-center">
                <h2>Nova resenha</h2>
                <br></br>
                <h3>{nomeDoLivro}</h3>
                <h3><i>{autorDoLivro}</i></h3>
            </div>
            <br></br>
            <CadastroDeResenhaForm livro={livro} setNotification={setNotification} setNotificationType={setNotificationType} />
        </>
    )
}

export default NovaResenhaPage;
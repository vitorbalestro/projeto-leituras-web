import { useState } from 'react';
import CadastroLivroForm from '../components/CadastroLivroForm';
import Notification from '../components/Notification';

const NovoLivro = () => {

    const [ notification, setNotification ] = useState("");
    const [ notificationType, setNotificationType ] = useState("");

    return (
        <>
            <div className="container">
                <Notification message = {notification} notificationType = {notificationType} />
            </div>
            <br></br>
            <div className="align-center text-center">
                <h2>Novo livro</h2>
            </div>
            <br></br>
            <CadastroLivroForm setNotification={setNotification} setNotificationType = {setNotificationType} />
        </>
    )

}

export default NovoLivro;
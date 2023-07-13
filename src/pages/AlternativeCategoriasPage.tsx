import { useState, createContext } from 'react';
import TabelaDeLivrosCategoriaAlt from '../components/TabelaDeLivrosCategoriaAlt';
import '../styles.css';
import Notification from '../components/Notification';


const AlternativeCategoriasPage = () => {

    const [notification, setNotification] = useState('')
    const [notificationType, setNotificationType] = useState('')

    const [ categoria, setCategoria ] = useState("1");

    const MyContext = createContext(categoria);


    
    const clickCategoriaButton = (id : string) => {
        setCategoria(id);
    }

    return(
        <>
            <div className="container">
                <Notification message = {notification} notificationType = {notificationType} />
            </div>
            <br></br>
            <div className="container mt-5">
                <div className="row align-center text-center">
                    <div className="col-2">
                        <div className="mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <h5><b>Categorias</b></h5>
                        </div>
                        <div className="row p-3">
                            <button onClick={() => clickCategoriaButton('1')} className={categoria === '1' ? "clicked-categoria-button-style":"categoria-button-style"}>
                                Ação
                            </button>
                        </div>
                        <hr></hr>
                        <div className="row p-3">
                            <button onClick={() => clickCategoriaButton('2')} className={categoria === '2' ? "clicked-categoria-button-style":"categoria-button-style"}>
                                Aventura
                            </button>
                        </div>
                        <hr></hr>
                        <div className="row p-3">
                            <button onClick={() => clickCategoriaButton('3')} className={categoria === '3' ? "clicked-categoria-button-style":"categoria-button-style"}>
                                Clássicos
                            </button>
                        </div>
                        <hr></hr>
                        <div className="row p-3">
                            <button onClick={() => clickCategoriaButton('4')} className={categoria === '4' ? "clicked-categoria-button-style":"categoria-button-style"}>
                                Fantasia
                            </button>
                        </div>
                        <hr></hr>
                        <div className="row p-3">
                            <button onClick={() => clickCategoriaButton('5')} className={categoria === '5' ? "clicked-categoria-button-style":"categoria-button-style"}>
                                Ficção Científica
                            </button>
                        </div>
                        <hr></hr>
                        <div className="row p-3">
                            <button onClick={() => clickCategoriaButton('6')} className={categoria === '6' ? "clicked-categoria-button-style":"categoria-button-style"}>
                                Ficção Histórica
                            </button>
                        </div>
                        <hr></hr>
                        <div className="row p-3">
                            <button onClick={() => clickCategoriaButton('7')} className={categoria === '7' ? "clicked-categoria-button-style":"categoria-button-style"}>
                                Policial
                            </button>
                        </div>
                        <hr></hr>
                        <div className="row p-3 mb-5">
                            <button onClick={() => clickCategoriaButton('8')} className={categoria === '8' ? "clicked-categoria-button-style":"categoria-button-style"}>
                                Romance
                            </button>
                        </div>
                    </div>
                    <div className="col-10">
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <MyContext.Provider value={categoria}>
                                <TabelaDeLivrosCategoriaAlt MyContext={MyContext} setNotification={setNotification} setNotificationType={setNotificationType} />
                            </MyContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AlternativeCategoriasPage;
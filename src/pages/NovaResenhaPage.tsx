import { useParams } from 'react-router-dom';
import useLivroPorId from '../hooks/useLivroPorId';

const NovaResenhaPage = () => {

    let { id } = useParams();

    const response = useLivroPorId(id);
    const livro = response.data ? response.data : null;
    const nomeDoLivro = livro ? livro.nome : "";
    const autorDoLivro = livro ? livro.autor : "";
    

    return (
        <>
            <br></br>
            <div className="align-center text-center">
                <h2>Nova resenha</h2>
                <br></br>
                <h3>{nomeDoLivro}</h3>
                <h3><i>{autorDoLivro}</i></h3>
            </div>
        </>
    )
}

export default NovaResenhaPage;
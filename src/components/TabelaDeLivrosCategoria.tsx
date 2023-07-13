import Livro from "../interfaces/Livro";
import '../styles.css';
import { Link } from 'react-router-dom';
import useRemoverLivro from '../hooks/useRemoverLivro';

interface Props {
    livros: Livro[];
    setNotification: React.Dispatch<React.SetStateAction<string>>;
    setNotificationType: React.Dispatch<React.SetStateAction<string>>;
}

const TabelaDeLivrosCategoria = ({ livros, setNotification, setNotificationType } : Props) => {

    const removerLivro = useRemoverLivro();


    const handleRemoverLivro = (id: number) => {
        if(window.confirm(`Remover Livro #${id}?`)){
            removerLivro.mutate(id);
            if(!removerLivro.error) {
                setNotification(`Livro removido com sucesso!`);
                setNotificationType('success');
    
                setTimeout(() => {
                    setNotification('');
                    setNotificationType('');
                },3000);
            }

            else {
                setNotification(`Erro ao remover livro. Tente novamente.`);
                setNotificationType('error');
    
                setTimeout(() => {
                    setNotification('');
                    setNotificationType('');
                },3000);
            }
        }
    }

    if(!livros) return null;

    return (
        <table className="table table-responsive table-bordered table-hover table-sm">
            <thead>
                <tr>
                    <th className="align-middle text-center">Id</th>
                    <th className="align-middle text-center">Título</th>
                    <th className="align-middle text-center">Autor</th>
                    <th className="align-middle text-center">Ações</th>
                </tr>
            </thead>
            <tbody>
                {livros!.map((livro) => 
                    <tr key={livro.id}>
                        <td width="5%" className="align-middle text-center">
                            {livro.id}
                        </td>
                        <td width="10%" className="align-middle text-center">
                            {livro.nome}
                        </td>
                        <td width="10%" className="align-middle text-center">
                            {livro.autor}
                        </td>
                        <td width="10%" className="align-middle text-center">
                            <Link to={`/resenhas/${livro.id}`} style={{textDecoration:0, color:"dimgrey"}}>Ver resenhas</Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="remover-button-table-style" onClick={() => handleRemoverLivro(livro.id!)}>
                                Remover
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default TabelaDeLivrosCategoria;
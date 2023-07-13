import Livro from "../interfaces/Livro";
import '../styles.css';
import { Link } from 'react-router-dom';
import useLivrosPorCategoria from '../hooks/useLivrosPorCategoria';
import { useContext } from 'react';
import useRemoverLivro from '../hooks/useRemoverLivro';

interface Props {
    MyContext: React.Context<string>;
    setNotification: React.Dispatch<React.SetStateAction<string>>;
    setNotificationType: React.Dispatch<React.SetStateAction<string>>;
}

const TabelaDeLivrosCategoriaAlt = ({MyContext, setNotification, setNotificationType} : Props) => {

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



    const categoria = useContext(MyContext);
    console.log(MyContext);
    const {
        data: response,
        isLoading,
        error,
    } = useLivrosPorCategoria(categoria);

    if (isLoading) return <h6> Carregando... </h6>;

    if(error || !response) throw error;

    const livros = response as Livro[];

    if(!livros) return null;

    if(livros!.length===0) {
        return (
            <div className='p-5 mt-5'>
                    <h2>Não há livros cadastrados nesta categoria.</h2>
            </div>
        )
    }

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

export default TabelaDeLivrosCategoriaAlt;
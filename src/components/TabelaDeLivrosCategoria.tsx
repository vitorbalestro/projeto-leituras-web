import Livro from "../interfaces/Livro";
import '../styles.css';
import { Link } from 'react-router-dom';


interface Props {
    livros: Livro[];
}

const TabelaDeLivrosCategoria = ({ livros } : Props) => {
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
                {livros.map((livro) => 
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
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default TabelaDeLivrosCategoria;
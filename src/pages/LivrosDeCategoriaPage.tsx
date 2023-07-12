import { useParams } from "react-router-dom";
import useLivrosPorCategoria from "../hooks/useLivrosPorCategoria";
import Livro from '../interfaces/Livro';
import TabelaDeLivrosCategoria from '../components/TabelaDeLivrosCategoria';

let categoriasMap = new Map<string,string>([
    ["1","Ação"],
    ["2","Aventura"],
    ["3", "Clássicos"],
    ["4","Fantasia"],
    ["5","Ficção Científica"],
    ["6","Ficção Histórica"],
    ["7","Policial"],
    ["8","Romance"]
]);

const LivrosDeCategoriaPage = () => {

    let { id } = useParams();

    const {
        data: response,
        isLoading,
        error,
    } = useLivrosPorCategoria(id);

    if (isLoading) return <h6> Carregando... </h6>;

    if(error || !response) throw error;

    const livros = response as Livro[];

    return (
        <>
            <div className="align-center text-center mt-5">
                <h2>{categoriasMap.get(id!)}</h2>
            </div>
            <div className="p-5">
                {livros && livros.length === 0 ? 
                <>
                    <div className='p-5 mt-5'>
                        <h2>Não há livros cadastrados nesta categoria.</h2>
                    </div>
                </>
                : <TabelaDeLivrosCategoria livros={livros}/>
                }   
            </div>
        </>
    )
}

export default LivrosDeCategoriaPage;
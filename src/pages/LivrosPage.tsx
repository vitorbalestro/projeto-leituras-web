import { useState } from "react";
import Paginacao from "../components/Paginacao";
import Pesquisa from "../components/Pesquisa";
import useLivrosPaginados from "../hooks/useLivrosPaginados";
import TabelaDeLivros from "../components/TabelaDeLivros"


const ListaDeLivros = () => {
    const tamanho = 5;
    const [ pagina, setPagina ] = useState(0);
    const [ nome, setNome ] = useState("");

    const handleRetrievedNome = (nome: string) => {
        setNome(nome);
        setPagina(0);
    }

    const handleSelectedPage = (pagina: number) => setPagina(pagina);

    const {
        data: resultadoPaginado,
        isLoading,
        error,
    } = useLivrosPaginados({ pagina, tamanho, nome });

    if (isLoading) return <h6> Carregando... </h6>;

    if(error || !resultadoPaginado) throw error;
    
    const livros = resultadoPaginado.livros.filter(livro => livro.nome.includes(nome));
    const totalDePaginas = resultadoPaginado.totalDePaginas;

    return (
        <>
        <div className="p-5">
            <div className="mb-1">
                <Pesquisa nome={nome} onRetrieveNome={handleRetrievedNome} />
            </div>
            <br></br>
            <TabelaDeLivros livros={livros} />
            <br></br>
            <div className="mt-4" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Paginacao
                    pagina={pagina}
                    totalDePaginas={totalDePaginas}
                    onSelectPage={handleSelectedPage}
                />
            </div>
        </div>
        </>
        
    );
};

export default ListaDeLivros;

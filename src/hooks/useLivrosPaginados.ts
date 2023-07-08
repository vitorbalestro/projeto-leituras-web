import { useQuery } from "@tanstack/react-query";
import ApiLivro from "../api/apiLivro";
import QueryStringLivro from "../interfaces/queryStringLivro";

const apiLivro = new ApiLivro();

const useLivrosPaginados = (query: QueryStringLivro) =>
    useQuery({
        queryKey: ["livros", "paginacao", query],
        queryFn: () => apiLivro.recuperarPagina({
            params: {
                pagina: query.pagina,
                tamanho: query.tamanho,
                nome: query.nome,
            },
        }),
        staleTime: 10_000,
        keepPreviousData: true,
    });

export default useLivrosPaginados;
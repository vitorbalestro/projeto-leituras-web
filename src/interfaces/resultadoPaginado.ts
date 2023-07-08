interface ResultadoPaginado<T> {
    totalDeItens: number;
    totalDePaginas: number;
    paginaCorrente: number;
    livros: T[];
}

export default ResultadoPaginado;
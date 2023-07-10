import { useQuery } from "@tanstack/react-query";
import Livro from "../interfaces/Livro";
import axios from "axios";

const useLivrosPorCategoria = (id?: string) => useQuery({
    queryKey: ['livros'],
    queryFn: () => axios
        .get<Livro[]>(`http://localhost:8080/livros/categoria/${id}`)
        .then((res) => res.data),
        staleTime: 10_000,
})

export default useLivrosPorCategoria;
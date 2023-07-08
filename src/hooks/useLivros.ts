import { useQuery } from "@tanstack/react-query";
import Livro from "../interfaces/Livro";
import axios from "axios";

const useLivros = () => useQuery({
    queryKey: ['livros'],
    queryFn: () => axios
        .get<Livro[]>("http://localhost:8080/livros")
        .then((res) => res.data),
        staleTime: 10_000,
})

export default useLivros;
import { useQuery } from "@tanstack/react-query";
import Livro from "../interfaces/Livro";
import axios from "axios";

const useLivroPorId = (id?: string) => useQuery({
    queryKey: ['livros'],
    queryFn: () => axios
        .get<Livro>(`http://localhost:8080/livros/${id}`)
        .then((res) => res.data),
        staleTime: 10_000,
        refetchOnMount: "always"
})

export default useLivroPorId;
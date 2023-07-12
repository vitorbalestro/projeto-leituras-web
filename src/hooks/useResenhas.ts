import { useQuery } from "@tanstack/react-query";
import Resenha from "../interfaces/Resenha";
import axios from "axios";

const useResenhas = (id?: string) => useQuery({
    queryKey: ['resenhas'],
    queryFn: () => axios
        .get<Resenha[]>(`http://localhost:8080/resenhas/livro/${id}`)
        .then((res) => res.data),
        staleTime: 10_000,
        refetchOnMount: "always"
})

export default useResenhas;
import { useQuery } from "@tanstack/react-query";
import Categoria from "../interfaces/Categoria";
import axios from "axios";

const useCategoriaPorId = (id?: string) => useQuery({
    queryKey: ['categorias'],
    queryFn: () => axios
        .get<Categoria>(`http://localhost:8080/categorias/${id}`)
        .then((res) => res.data),
        staleTime: 10_000,
        refetchOnMount: "always"
})

export default useCategoriaPorId;
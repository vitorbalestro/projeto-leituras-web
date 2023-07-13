import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiLivro from "../api/apiLivro";

const apiLivro = new ApiLivro();

const useCadastrarLivro = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: apiLivro.cadastrar,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['livros']
            })
        }
    })
}

export default useCadastrarLivro;
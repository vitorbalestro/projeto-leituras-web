import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiLivro from "../api/apiLivro";

const apiLivro = new ApiLivro();

const useRemoverLivro = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: apiLivro.remover,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['livros']
            })
        }
    })
}

export default useRemoverLivro;
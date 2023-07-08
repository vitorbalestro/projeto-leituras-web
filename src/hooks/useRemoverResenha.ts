import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiResenha from "../api/apiResenha";

const apiResenha = new ApiResenha();

const useRemoverResenha = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: apiResenha.remover,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['resenhas']
            })
        }
    })
}

export default useRemoverResenha;
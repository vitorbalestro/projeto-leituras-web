import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiResenha from "../api/apiResenha";

const apiResenha = new ApiResenha();

const useCadastrarResenha = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: apiResenha.cadastrar,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['resenhas']
            })
        }
    })
}

export default useCadastrarResenha;
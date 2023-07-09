import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiResenha from "../api/apiResenha";

const apiResenha = new ApiResenha();

const useUpdateResenha = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: apiResenha.update,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['resenhas']
            })
        }
    })
}

export default useUpdateResenha;
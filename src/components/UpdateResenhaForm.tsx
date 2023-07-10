import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from "zod";
import useUpdateResenha from "../hooks/useUpdateResenha";
import Resenha from '../interfaces/Resenha';
import Livro from '../interfaces/Livro';
import React from 'react';


const schema = z.object({
    texto: z
        .string()
        .min(1, { message: "O novo texto deve ser inserido" })
})

type FormData = z.infer<typeof schema>;

interface Props {
    livro: Livro,
    autor: String,
    id: number,
    setNotification: React.Dispatch<React.SetStateAction<string>>,
    setNotificationType: React.Dispatch<React.SetStateAction<string>>,
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>,
}

const UpdateResenhaForm = ({ id, autor, livro, setNotification, setNotificationType, setShowForm }: Props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const updateResenha = useUpdateResenha();

    const onSubmit = ({
        texto
        }: FieldValues) => {
        const resenha: Resenha = {
            texto: texto,
            livro: livro,
            autor: autor,
            id:id
        }; 
        reset();
        updateResenha.mutate(resenha);

        if(!updateResenha.error) {
            setNotification(`Resenha alterada com sucesso!`);
            setNotificationType('success');
            setShowForm(false);

            setTimeout(() => {
                setNotification('');
                setNotificationType('');
            },3000);
        }
    };

    if(updateResenha.error) {
        setNotification(`Erro ao alterar resenha!`);
        setNotificationType('error');

        setTimeout(() => {
            setNotification('');
            setNotificationType('');
        },3000);

        throw updateResenha.error;
    } 

    return (
        <div>
            <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="texto">Novo texto</label>
                    <textarea {...register("texto")} defaultValue="" style={{height: 250}}  className={errors.texto
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"} id="texto" 
                            aria-describedby="textHelp"/>
                    <div className="invalid-feedback">
                        {errors.texto && <p className="text-danger">{errors.texto.message}</p>}
                    </div>

                </div>
                <button id="botao" type="submit" form="myForm" value="submit" className="btn btn-success btn-sm mt-3 mb-2">Enviar</button>
            </form>
            
        </div>
    )
}


export default UpdateResenhaForm;
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from "zod";
import useCadastrarResenha from "../hooks/useCadastrarResenha";
import Resenha from '../interfaces/Resenha';
import Livro from '../interfaces/Livro';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const regexUsername = /^@/;

const schema = z.object({
    texto: z
        .string()
        .min(1, { message: "O novo texto deve ser inserido" }),
    username: z
        .string()
        .min(1, { message: "Seu username deve ser informado"})
        .regex(regexUsername, { message: "O username deve começar com @" })
})

type FormData = z.infer<typeof schema>;

interface Props {
    livro: Livro,
    setNotification: React.Dispatch<React.SetStateAction<string>>,
    setNotificationType: React.Dispatch<React.SetStateAction<string>>
}

const CadastroDeResenhaForm = ({ livro, setNotification, setNotificationType }: Props) => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const cadastrarResenha = useCadastrarResenha();

    const onSubmit = ({
        texto,
        username
        }: FieldValues) => {
        const resenha: Resenha = {
            texto: texto,
            livro: livro,
            autor: username
        }; 
        console.log(resenha)
        reset();
        cadastrarResenha.mutate(resenha);
        if(!cadastrarResenha.error) {
            setNotification(`Resenha cadastrada com sucesso! Redirecionando...`);
            setNotificationType('success');

            setTimeout(() => {
                setNotification('');
                setNotificationType('');
                navigate(`/resenhas/${livro.id}`)
            },2000);
        }
    };

    if(cadastrarResenha.error) {
        setNotification(`Erro ao cadastrar resenha!`);
        setNotificationType('error');

        setTimeout(() => {
            setNotification('');
            setNotificationType('');
        },3000);

        throw cadastrarResenha.error;
    } 

    return (
        <div className="container mb-5">
            <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input {...register("username")} type="username" className={errors.username
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"} id="username" 
                            aria-describedby="usernameHelp" />
                     <div className="invalid-feedback">
                        {errors.username && <p className="text-danger">{errors.username.message}</p>}
                    </div>

                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor="texto">Resenha</label>
                    <textarea {...register("texto")} defaultValue="" style={{height: 300}}  className={errors.texto
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"} id="texto" 
                            aria-describedby="textHelp"/>
                    <div className="invalid-feedback">
                        {errors.texto && <p className="text-danger">{errors.texto.message}</p>}
                    </div>

                </div>
                <button id="botao" type="submit" form="myForm" value="submit" className="btn reg-page-button btn-primary btn-lg mt-3 mb-2">Enviar</button>
            </form>
            
        </div>
    )
}


export default CadastroDeResenhaForm;


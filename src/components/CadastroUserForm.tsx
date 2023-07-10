import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from "zod";
import { useNavigate } from 'react-router-dom';

const regexUsername = /^@/;
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const regexData = /^[0-9]{2}\/[0-9]{2}\[0-9]{4}$/

const schema = z.object({
    nome: z
        .string()
        .min(1, { message: "O nome deve ser informado" }),
    username: z
        .string()
        .min(1, { message: "Seu username deve ser informado"})
        .regex(regexUsername, { message: "O username deve começar com @" }),
    email: z
        .string()
        .min(1, { message: "O e-mail deve ser informado" })
        .regex(regexEmail, { message: "Informe um endereço de e-mail válido" }),
    dataNascimento: z
        .string()
        .min(1, { message: "Informe a data de nascimento"})
        .regex(regexData, { message: "O formato da data deve ser DD/MM/AAAA"}),
    password: z
        .string()
        .min(6, { message: "A senha deve ter ao menos 6 caracteres" }),
    confirm: z
        .string()

}).refine((data) => data.password === data.confirm, {
    message: "As senhas são diferentes",
    path: ["confirm"],
});

type FormData = z.infer<typeof schema>;


const CadastroUserForm = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = ({
        nome,
        username,
        email,
        dataNascimento,
        password
        }: FieldValues) => {
            reset();
            navigate('/');
    };

    return (
            <div className="container mb-5">
                <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input {...register("nome")} type="username" className={errors.nome
                        ? "form-control form-control-sm is-invalid"
                        : "form-control form-control-sm"} id="nome" 
                                aria-describedby="nomeHelp" />
                         <div className="invalid-feedback">
                            {errors.nome && <p className="text-danger">{errors.nome.message}</p>}
                        </div>
                    </div>
                    <br></br>
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
                        <label htmlFor="email">E-mail</label>
                        <input {...register("email")} type="email" className={errors.email
                        ? "form-control form-control-sm is-invalid"
                        : "form-control form-control-sm"} id="email" 
                                aria-describedby="emailHelp" />
                         <div className="invalid-feedback">
                            {errors.email && <p className="text-danger">{errors.email.message}</p>}
                        </div>
    
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="dataNascimento">Data de Nascimento</label>
                        <input {...register("dataNascimento")} type="dataNascimento" className={errors.dataNascimento
                        ? "form-control form-control-sm is-invalid"
                        : "form-control form-control-sm"} id="dataNascimento" 
                                aria-describedby="dataNascimentoHelp" />
                        <div className="invalid-feedback">
                            {errors.dataNascimento && <p className="text-danger">{errors.dataNascimento.message}</p>}
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="form-group mb-3" style={{width: 250}}>
                        <label htmlFor="password">Senha</label>
                        <input {...register("password")} type="password" className={errors.password
                        ? "form-control form-control-sm is-invalid"
                        : "form-control form-control-sm"} id="password" placeholder="A senha deve ter ao menos 6 dígitos" 
                                aria-describedby="passwordHelp" />
                        <div className="invalid-feedback">
                            {errors.password && <p className="text-danger">{errors.password.message}</p>}
                        </div>
                    </div>
                    <div className="form-group" style={{width: 250}}>
                        <label htmlFor="password">Confirme a senha</label>
                        <input {...register("confirm")} type="password" className={errors.confirm
                        ? "form-control form-control-sm is-invalid"
                        : "form-control form-control-sm"} id="confirm" 
                                aria-describedby="confirmHelp" />
                        <div className="invalid-feedback">
                            {errors.confirm && <p className="text-danger">{errors.confirm.message}</p>}
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <button id="botao" type="submit" form="myForm" value="submit" className="btn reg-page-button btn-primary  mt-3 mb-2">Enviar</button>
                </form>
                
            </div>
    )

}

export default CadastroUserForm;
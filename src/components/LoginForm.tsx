import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from "zod";
import { useNavigate } from 'react-router-dom';


const schema = z.object({
    username: z
        .string()
        .min(1, { message: "Seu username deve ser informado"}),
    password: z
        .string()
        .min(6, { message: "Informe uma senha válida" }),
})

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
      
        username,
        password
        }: FieldValues) => {
            reset();
            navigate('/');
    };

    return (
            <div className="container mb-5">
                <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-2" style={{width: 250}}>
                        <label htmlFor="username">Username</label>
                        <input {...register("username")} type="username" className={errors.username
                        ? "form-control form-control-sm is-invalid"
                        : "form-control form-control-sm"} id="username" 
                                aria-describedby="usernameHelp" />
                         <div className="invalid-feedback">
                            {errors.username && <p className="text-danger">{errors.username.message}</p>}
                        </div>
                    </div>
                    <div className="form-group mb-3" style={{width: 250}}>
                        <label htmlFor="password">Senha</label>
                        <input {...register("password")} type="password" className={errors.password
                        ? "form-control form-control-sm is-invalid"
                        : "form-control form-control-sm"} id="password"
                                aria-describedby="passwordHelp" />
                        <div className="invalid-feedback">
                            {errors.password && <p className="text-danger">{errors.password.message}</p>}
                        </div>
                    </div>
                    <br></br>
                    <button id="botao" type="submit" form="myForm" value="submit" className="btn reg-page-button btn-primary  mt-3 mb-2">Enviar</button>
                </form>
                
            </div>
    )

}

export default CadastroUserForm;
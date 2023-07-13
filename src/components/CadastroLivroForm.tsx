import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from "zod";
import Livro from '../interfaces/Livro';
import { useNavigate } from 'react-router-dom';
import useCadastrarLivro from '../hooks/useCadastrarLivro';


const schema = z.object({
    nome: z
        .string()
        .min(1, { message: "O título do livro deve ser inserido" }),
    autor: z
        .string()
        .min(1, { message: "O autor do livro deve ser informado " }),
    categoria: z
        .enum(["1", "2", "3", "4", "5", "6", "7", "8"] as const, {
        errorMap: () => ({ message: "Uma categoria deve ser selecionada" }),
        }),
})

type FormData = z.infer<typeof schema>;

type Props = {
    setNotification: React.Dispatch<React.SetStateAction<string>>,
    setNotificationType: React.Dispatch<React.SetStateAction<string>>
}

const CadastroLivroForm = ({ setNotification, setNotificationType }: Props) => {

    const categorias = ["1","2","3","4","5","6","7","8"];

    let categoriasMap = new Map<string,string>([
        ["1","Ação"],
        ["2","Aventura"],
        ["3", "Clássicos"],
        ["4","Fantasia"],
        ["5","Ficção Científica"],
        ["6","Ficção Histórica"],
        ["7","Policial"],
        ["8","Romance"]
    ]);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const cadastrarLivro = useCadastrarLivro();

    const onSubmit = ({
        nome,
        autor,
        categoria
        }: FieldValues) => {
                
        const livro: Livro = {
            nome: nome,
            autor: autor,
            categoria: {id: categoria, nome: ""}
        }; 
        reset();
        cadastrarLivro.mutate(livro);
        if(!cadastrarLivro.error) {
            setNotification(`Livro cadastrado com sucesso! Redirecionando...`);
            setNotificationType('success');

            setTimeout(() => {
                setNotification('');
                setNotificationType('');
                navigate(`/categoria/${categoria}`)
            },3000);
        }
    };

    if(cadastrarLivro.error) {
        setNotification(`Erro ao cadastrar resenha!`);
        setNotificationType('error');

        setTimeout(() => {
            setNotification('');
            setNotificationType('');
        },3000);

        throw cadastrarLivro.error;
    } 

    return (
        <div className="container mb-5">
            <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group" style={{width: 400}}>
                    <label htmlFor="nome">Título</label>
                    <input {...register("nome")} type="nome" className={errors.nome
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"} id="nome" 
                            aria-describedby="nomeHelp" />
                     <div className="invalid-feedback">
                        {errors.nome && <p className="text-danger">{errors.nome.message}</p>}
                    </div>

                </div>
                <br></br>
                <div className="form-group " style={{width: 400}}>
                    <label htmlFor="autor">Autor</label>
                    <input {...register("autor")} defaultValue="" className={errors.autor
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"} id="autor" 
                            aria-describedby="autorHelp"/>
                    <div className="invalid-feedback">
                        {errors.autor && <p className="text-danger">{errors.autor.message}</p>}
                    </div>

                </div>
                <br></br>
                <div className="form-group" style={{width: 400}}>
                    <label htmlFor="categoria">Categoria</label>
                    <select {...register("categoria")}
                    id="categoria"
                    className={errors.categoria ? "form-control form-control-sm is-invalid"
                    :"form-control form-control-sm"} >
                        <option key={0} value="">
                            Selecione uma categoria
                        </option>
                        {categorias.map((categoria) =>
                            <option key={categoria} value={categoria}>
                                {categoriasMap.get(categoria)}
                            </option>)}
                    </select>
                </div>
                <br></br>
                <button id="botao" type="submit" form="myForm" value="submit" className="btn reg-page-button btn-primary mt-3 mb-2">Enviar</button>
            </form>
            
        </div>
    )
}


export default CadastroLivroForm;


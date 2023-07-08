import Livro from "../interfaces/Livro";
import ApiGenerica from "./apiGenerica";

class ApiLivro extends ApiGenerica<Livro> {
    constructor() {
        super("/livros");
    }
}

export default ApiLivro;
import Livro from './Livro';

interface Resenha {
    id?: number;
    livro: Livro;
    texto: string;
    autor: String;
};

export default Resenha;
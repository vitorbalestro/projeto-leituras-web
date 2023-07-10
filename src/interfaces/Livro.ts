import Categoria from './Categoria';

interface Livro {
    id?: number;
    nome: string;
    autor: string;
    categoria: Categoria;
};

export default Livro;
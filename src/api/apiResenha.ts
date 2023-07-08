import Resenha from "../interfaces/Resenha";
import ApiGenerica from "./apiGenerica";

class ApiResenha extends ApiGenerica<Resenha> {
    constructor() {
        super("/resenhas");
    }
}

export default ApiResenha;
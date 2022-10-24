import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { ProdutoModel } from "./ListProdutos";

interface SelectProdutosProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectProdutos = (props: SelectProdutosProps) => {

    const [produtos, setProdutos] = useState<ProdutoModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/produtos')
            .then(response => {
                setProdutos(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="produto">Selecione o Produto:</label>
            </div>
            <div>
                <select name="produto"
                    id="produto"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        produtos.map(item => (
                            <option value={item.id}>{item.etiqueta}-{item.doacao_id}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectProdutos;
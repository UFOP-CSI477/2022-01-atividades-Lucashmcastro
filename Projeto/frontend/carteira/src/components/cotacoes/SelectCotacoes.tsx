import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { CotacaoModel } from "./ListCotacoes";

interface SelectCotacoesProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectCotacoes = (props: SelectCotacoesProps) => {

    const [cotacoes, setCotacoes ] = useState<CotacaoModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/cotacoes')
            .then(response => {
                setCotacoes(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="cotacao">Selecione a Cotação:</label>
            </div>
            <div>
                <select name="cotacao"
                    id="cotacao"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        cotacoes.map(item => (
                            <option value={item.id}>{item.empresa?.nome}-{item.bolsa?.nome}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectCotacoes;
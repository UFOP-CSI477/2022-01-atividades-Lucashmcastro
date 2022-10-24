import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { DistribuicaoModel } from "./ListDistribuicoes";

interface SelectDistribuicoesProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectDistribuicoes = (props: SelectDistribuicoesProps) => {

    const [distribuicoes, setDistribuicoes ] = useState<DistribuicaoModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/distribuicoes')
            .then(response => {
                setDistribuicoes(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="distribuicao">Selecione a Distribuição:</label>
            </div>
            <div>
                <select name="distribuicao"
                    id="distribuicao"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        distribuicoes.map(item => (
                            <option value={item.id}>{item.produto?.etiqueta}-{item.unidade?.nome}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectDistribuicoes;
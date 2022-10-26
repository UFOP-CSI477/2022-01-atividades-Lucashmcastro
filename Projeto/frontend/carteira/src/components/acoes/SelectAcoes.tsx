import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { AcaoModel } from "./ListAcoes";

interface SelectAcoesProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectAcoes = (props: SelectAcoesProps) => {

    const [acoes, setAcoes ] = useState<AcaoModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/acoes')
            .then(response => {
                setAcoes(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="acao">Selecione a Ação:</label>
            </div>
            <div>
                <select name="acao"
                    id="acao"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        acoes.map(item => (
                            <option value={item.id}>{item.nome}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectAcoes;
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { AcaoModel } from "./ListAcoes";
import { AtivoModel } from "../ativos/ListAtivos";


interface SelectAcoesProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectAcoes = (props: SelectAcoesProps) => {

    const [acoes, setAcoes ] = useState<AcaoModel[]>([]);

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const [ativos, setAtivos] = useState<AtivoModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/acoes')
            .then(response => {
                setAcoes(response.data);
                setNome(response.data.nome);
                setDescricao(response.data.descricao);
                setAtivos(response.data.ativos);
            })

    }, []);

    return (

        <div>
                <div>               
                    <label htmlFor="acao">Selecione a Ação</label>
                </div>
            <div>
                <select name="acao"
                    className="form-control"
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
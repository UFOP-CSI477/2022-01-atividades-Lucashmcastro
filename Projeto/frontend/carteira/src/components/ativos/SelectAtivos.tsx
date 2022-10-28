import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { AtivoModel } from "./ListAtivos";
import {BolsaModel} from "../bolsas/ListBolsas";

interface SelectAtivosProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectAtivos = (props: SelectAtivosProps) => {

    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');

    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);
    const [ativos, setAtivos] = useState<AtivoModel[]>([]);

    useEffect(() => {

        api.get('/ativos')
            .then(response => {
                setAtivos(response.data);
                setBolsas(response.data.bolsas);
                setTipo(response.data.tipo);
                setDescricao(response.data.descricao);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="ativo">Selecione o Ativo</label>
            </div>
            <div>
                <select name="ativo"
                    className="form-control"
                    id="ativo"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        ativos.map(item => (
                            <option value={item.id}>{item.tipo}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectAtivos;
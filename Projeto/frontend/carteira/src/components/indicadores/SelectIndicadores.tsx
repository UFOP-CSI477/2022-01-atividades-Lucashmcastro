import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { IndicadorModel } from "./ListIndicadores";
import { BolsaModel } from "../bolsas/ListBolsas";

interface SelectIndicadoresProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectIndicadores = (props: SelectIndicadoresProps) => {

    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [valor, setValor] = useState('');

    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);
    const [indicadores, setIndicadores] = useState<IndicadorModel[]>([]);

    useEffect(() => {

        api.get('/indicadores')
            .then(response => {
                setNome(response.data.nome);
                setTipo(response.data.tipo);
                setValor(response.data.valor);
                setIndicadores(response.data);
                setBolsas(response.data.bolsa);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="indicador">Selecione o Indicador</label>
            </div>
            <div>
                <select name="indicador"
                    className="form-control"
                    id="indicador"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        indicadores.map(item => (
                            <option value={item.id}>{item.nome}-{item.bolsa?.nome}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectIndicadores;
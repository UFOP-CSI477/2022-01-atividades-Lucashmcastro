import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { CarteiraModel } from "./ListCarteiras";
import { AtivoModel } from "../ativos/ListAtivos";


interface SelectCarteirasProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectCarteiras = (props: SelectCarteirasProps) => {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [status, setStatus] = useState('');

    const [ativos, setAtivos] = useState<AtivoModel[]>([]);
    const [carteiras, setCarteiras ] = useState<CarteiraModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/carteiras')
            .then(response => {
                setCarteiras(response.data);
                setAtivos(response.data);
                setNome(response.data.nome);
                setCpf(response.data.cpf);
                setStatus(response.data.status);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="carteira">Selecione a Carteira:</label>
            </div>
            <div>
                <select name="carteira"
                    id="carteira"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        carteiras.map(item => (
                            <option value={item.id}>{item.nome}-{item.ativo?.tipo}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectCarteiras;
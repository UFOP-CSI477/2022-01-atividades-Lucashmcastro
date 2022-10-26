import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { AtivoModel } from "./ListAtivos";

interface SelectAtivosProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectAtivos = (props: SelectAtivosProps) => {

    const [ativos, setAtivos] = useState<AtivoModel[]>([]);

    useEffect(() => {

        api.get('/ativos')
            .then(response => {
                setAtivos(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="ativo">Selecione o Ativo:</label>
            </div>
            <div>
                <select name="ativo"
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
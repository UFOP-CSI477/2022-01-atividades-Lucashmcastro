import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { BolsaModel } from "./ListBolsas";

interface SelectBolsasProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectBolsas = (props: SelectBolsasProps) => {

    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/bolsas')
            .then(response => {
                setBolsas(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="bolsa">Selecione a Bolsa</label>
            </div>
            <div>
                <select name="bolsa"
                    className="form-control"
                    id="bolsa"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        bolsas.map(item => (
                            <option value={item.id}>{item.nome}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );


}

export default SelectBolsas;
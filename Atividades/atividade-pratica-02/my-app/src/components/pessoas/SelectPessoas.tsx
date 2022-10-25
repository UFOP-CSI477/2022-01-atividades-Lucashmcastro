import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { PessoaModel } from "./ListPessoas";

interface SelectPessoasProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectPessoas = (props: SelectPessoasProps) => {

    const [pessoas, setPessoas ] = useState<PessoaModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/pessoas')
            .then(response => {
                setPessoas(response.data);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="pessoa">Selecione a Pessoa:</label>
            </div>
            <div>
                <select name="pessoa"
                    id="pessoa"
                    value={props.id}
                    onChange={e => props.setId(parseInt(e.target.value))}>

                    {
                        pessoas.map(item => (
                            <option value={item.id}>{item.cidade?.nome}-{item.tipoSanguineo?.tipo}</option>
                        ))
                    }

                </select>
            </div>
        </div>

    );

}

export default SelectPessoas;
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import api from "../../services/api";
import { CotacaoModel } from "./ListCotacoes";
import { EmpresaModel } from "../empresas/ListEmpresas";
import { BolsaModel } from "../bolsas/ListBolsas";

interface SelectCotacoesProps {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const SelectCotacoes = (props: SelectCotacoesProps) => {

    const [valor, setValor] = useState('');
    const [date, setDate] = useState('');

    const [empresas, setEmpresas] = useState<EmpresaModel[]>([]);
    const [bolsas, setBolsas] = useState<BolsaModel[]>([]);
    const [cotacoes, setCotacoes ] = useState<CotacaoModel[]>([]);

    // const [ id, setId ] = useState(0)

    useEffect(() => {

        api.get('/cotacoes')
            .then(response => {
                setCotacoes(response.data);
                setBolsas(response.data.bolsas);
                setEmpresas(response.data.empresas);
                setValor(response.data.valor);
                setDate(response.data.date);
            })

    }, []);

    return (

        <div>
            <div>
                <label htmlFor="cotacao">Selecione a Cotação</label>
            </div>
            <div>
                <select name="cotacao"
                    className="form-control"
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
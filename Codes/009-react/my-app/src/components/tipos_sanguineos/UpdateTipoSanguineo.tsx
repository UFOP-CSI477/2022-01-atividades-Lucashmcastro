import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const UpdateTipoSanguineo = () => {

    const [ tipo, setTipo ] = useState('');
    const [ fator, setFator ] = useState('');

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/tiposSanguineos/${id}`)
            .then(response => {
                setTipo(response.data.tipo);
                setFator(response.data.fator);
            })
    },[id]);


    const handleUpdateTipoSanguineo = async (e : React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const intId = parseInt(String(id));

        const data = {
            id : intId,
            tipo,
            fator
        }

        try {

            await api.put('/tiposSanguineos', data);
            navigate('/tiposSanguineos');
            
        } catch(error) {
            alert('Erro ao atualizar o Tipo Sanguineo!')
            console.error(error);
        }

    }

    return (
        <div>
            <h3>Atualizar Tipo Sanguineo: {tipo}-{fator}</h3>
            <form onSubmit={handleUpdateTipoSanguineo}>

                <div>
                    <label 
                        htmlFor="tipo"
                    >Tipo</label>

                    <input type="text" 
                        name="tipo" 
                        id="tipo"
                        value={tipo}
                        onChange={e => setTipo(e.target.value)}
                        placeholder="Tipo Sanguineo"
                        />
                </div>

                <div>
                    <label 
                        htmlFor="fator"
                    >Fator</label>

                    <input type="text" 
                        name="fator" 
                        id="fator" 
                        value={fator}
                        onChange={e => setFator(e.target.value)}
                        placeholder="Fator do Tipo Sanguineo"
                        />
                </div>

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );    


}

export default UpdateTipoSanguineo;
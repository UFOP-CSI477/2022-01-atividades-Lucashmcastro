import { prismaClient } from '../../database/client.js';

export class CreateTipoSanguineoController {

    //criacão de função assíncrona
    async handle( request, response ){

        const { id, tipo, fator } = request.body;

        const tipoSanguineo = await prismaClient.tipoSanguineo.create({
            data: {
                id,
                tipo,
                fator
            }
        });

        console.log(tipoSanguineo);
        return response.json(tipoSanguineo);
    }
}
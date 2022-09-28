import { prismaClient } from '../../database/client.js';

export class CreateTipoSanguineoController {

    //criacão de função assíncrona
    async handle( request, response ){

        const { tipo, fator } = request.body;

        const tipoSanguineo = await prismaClient.tipoSanguineo.create({
            data: {
                tipo,
                fator
            }
        });

        console.log(tipoSanguineo);
        return response.json(tipoSanguineo);
    }
}
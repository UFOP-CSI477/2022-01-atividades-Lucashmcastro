import { prismaClient } from '../../database/client.js';

export class TipoSanguineoModel{

    async exists(id){

        const tipoSanguineoCount = await prismaClient.tipoSanguineo.count({
            where: {
                id : id
            }
        });

        console.log(`[TipoSanguineoModel] exists().count = ${tipoSanguineoCount} (${tipoSanguineoCount > 0})`);

        return tipoSanguineoCount > 0;
    }
}
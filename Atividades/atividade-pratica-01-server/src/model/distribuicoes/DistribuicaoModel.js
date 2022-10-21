import { prismaClient } from '../../database/client.js';

export class DistribuicaoModel {

    async exists(id) {

        const distribuicaoCount = await prismaClient.distribuicoes.count({
            where: {
                id: id
            }
        });

        console.log(`[DistribuicaoModel] exists().count = ${distribuicaoCount} (${distribuicaoCount > 0})`);

        return distribuicaoCount > 0;
    }
}
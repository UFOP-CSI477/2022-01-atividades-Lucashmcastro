import { prismaClient } from '../../database/client.js';

export class UnidadeModel {

    async exists(id) {

        const unidadeCount = await prismaClient.unidade.count({
            where: {
                id: id
            }
        });

        console.log(`[UnidadeModel] exists().count = ${unidadeCount} (${unidadeCount > 0})`);

        return unidadeCount > 0;
    }
}
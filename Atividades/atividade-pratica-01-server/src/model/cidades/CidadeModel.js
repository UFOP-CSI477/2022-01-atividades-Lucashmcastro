import { prismaClient } from '../../database/client.js';

export class CidadeModel {

    async exists(id) {

        const cidadeCount = await prismaClient.cidade.count({
            where: {
                id: id
            }
        });

        console.log(`[CidadeModel] exists().count = ${cidadeCount} (${cidadeCount > 0})`);

        return cidadeCount > 0;
    }
}
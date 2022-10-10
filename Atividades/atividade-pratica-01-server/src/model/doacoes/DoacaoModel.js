import { prismaClient } from '../../database/client.js';

export class DoacaoModel {

    async exists(id) {

        const doacaoCount = await prismaClient.doacao.count({
            where: {
                id: id
            }
        });

        console.log(`[DoacaoModel] exists().count = ${doacaoCount} (${doacaoCount > 0})`);

        return doacaoCount > 0;
    }
}
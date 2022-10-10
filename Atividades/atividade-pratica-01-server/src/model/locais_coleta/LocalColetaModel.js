import { prismaClient } from '../../database/client.js';

export class LocalColetaModel {

    async exists(id) {

        const localColetaCount = await prismaClient.localColeta.count({
            where: {
                id: id
            }
        });

        console.log(`[LocalColetaModel] exists().count = ${localColetaCount} (${localColetaCount > 0})`);

        return localColetaCount > 0;
    }
}
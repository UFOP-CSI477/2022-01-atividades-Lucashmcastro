import { prismaClient } from '../database/client.js';

export class AcaoModel {

    async exists(id: any) {

        const acaoCount = await prismaClient.acao.count({
            where: {
                id: id
            }
        });

        console.log(`[AcaoModel] exists().count = ${acaoCount} (${acaoCount > 0})`);

        return acaoCount > 0;
    }
}
import { prismaClient } from '../database/client.js';

export class CotacaoModel {

    async exists(id: any) {

        const cotacaoCount = await prismaClient.cotacao.count({
            where: {
                id: id
            }
        });

        console.log(`[CotacaoModel] exists().count = ${cotacaoCount} (${cotacaoCount > 0})`);

        return cotacaoCount > 0;
    }
}
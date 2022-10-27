import { prismaClient } from '../database/client';

export class BolsaModel {

    async exists(id: any) {

        const bolsaCount = await prismaClient.bolsa.count({
            where: {
                id: id
            }
        });

        console.log(`[BolsaModel] exists().count = ${bolsaCount} (${bolsaCount > 0})`);

        return bolsaCount > 0;
    }
}
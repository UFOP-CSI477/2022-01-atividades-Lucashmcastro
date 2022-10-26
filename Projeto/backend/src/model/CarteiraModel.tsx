import { prismaClient } from '../database/client.js';

export class CarteiraModel {

    async exists(id: any) {

        const carteiraCount = await prismaClient.carteira.count({
            where: {
                id: id
            }
        });

        console.log(`[CarteiraModel] exists().count = ${carteiraCount} (${carteiraCount > 0})`);

        return carteiraCount > 0;
    }
}
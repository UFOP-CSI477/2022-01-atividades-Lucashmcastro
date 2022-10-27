import { prismaClient } from '../database/client';

export class AtivoModel {

    async exists(id: any) {

        const ativoCount = await prismaClient.ativo.count({
            where: {
                id: id
            }
        });

        console.log(`[AtivoModel] exists().count = ${ativoCount} (${ativoCount > 0})`);

        return ativoCount > 0;
    }
}
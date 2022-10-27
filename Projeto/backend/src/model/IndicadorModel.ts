import { prismaClient } from '../database/client';

export class IndicadorModel {

    async exists(id: any) {

        const indicadorCount = await prismaClient.indicador.count({
            where: {
                id: id
            }
        });

        console.log(`[IndicadorModel] exists().count = ${indicadorCount} (${indicadorCount > 0})`);

        return indicadorCount > 0;
    }
}
import { prismaClient } from '../database/client.js';

export class EmpresaModel {

    async exists(id: any) {

        const empresaCount = await prismaClient.empresa.count({
            where: {
                id: id
            }
        });

        console.log(`[EmpresaModel] exists().count = ${empresaCount} (${empresaCount > 0})`);

        return empresaCount > 0;
    }
}
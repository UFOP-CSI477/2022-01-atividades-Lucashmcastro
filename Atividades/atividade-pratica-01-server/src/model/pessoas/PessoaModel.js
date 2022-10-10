import { prismaClient } from '../../database/client.js';

export class PessoaModel {

    async exists(id) {

        const pessoaCount = await prismaClient.pessoa.count({
            where: {
                id: id
            }
        });

        console.log(`[PessoaModel] exists().count = ${pessoaCount} (${pessoaCount > 0})`);

        return pessoaCount > 0;
    }
}
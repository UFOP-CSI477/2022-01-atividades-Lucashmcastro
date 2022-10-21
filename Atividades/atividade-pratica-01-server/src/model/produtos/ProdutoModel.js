import { prismaClient } from '../../database/client.js';

export class ProdutoModel {

    async exists(id) {

        const produtoCount = await prismaClient.produto.count({
            where: {
                id: id
            }
        });

        console.log(`[ProdutoModel] exists().count = ${produtoCount} (${produtoCount > 0})`);

        return produtoCount > 0;
    }
}
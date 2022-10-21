import { prismaClient } from '../../database/client.js'

export class GetAllProdutoController {


    async handle(request, response) {

        const produtos = await prismaClient.produto.findMany({
            select: {
                id: true,
                etiqueta: true,
                validade: true,
                created_at:true,
                doacao: true
            }
        });

        console.log(produtos);
        return response.json(produtos);

    }

}
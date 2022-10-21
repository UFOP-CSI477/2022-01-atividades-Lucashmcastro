import { prismaClient } from '../../database/client.js';

export class GetByIdProdutoController{

    async handle( request, response){

        const { id } = request.params;

        const produto = await prismaClient.produto.findUnique({
            where: { 
                id : id
            },
            select: { 
                id: true,
                etiqueta: true,
                validade: true,
                created_at: true,
                doacao: true
            }

        });

        console.log(produto);
        return response.json(produto);
    }
}
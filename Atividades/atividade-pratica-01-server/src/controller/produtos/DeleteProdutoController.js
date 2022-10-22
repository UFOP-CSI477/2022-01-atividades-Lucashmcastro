import { prismaClient } from "../../database/client.js";

export class DeleteProdutoController {

    async handle(request, response) {

        const { id } = request.params;

        try {
            const produto = await prismaClient.produto.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(produto);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
import { prismaClient } from "../../database/client.js";

export class DeleteDistribuicaoController {

    async handle(request, response) {

        const { id } = request.params;

        try {
            const distribuicao = await prismaClient.distribuicoes.delete({
                where: {
                    id: id
                }
            });

            return response.json(distribuicao);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
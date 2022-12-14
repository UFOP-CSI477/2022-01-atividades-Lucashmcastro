import { prismaClient } from "../../database/client.js";

export class DeleteDoacaoController {

    async handle(request, response) {

        const { id } = request.params;

        try {
            const doacao = await prismaClient.doacao.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(doacao);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
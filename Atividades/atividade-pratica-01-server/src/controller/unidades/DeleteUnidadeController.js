import { prismaClient } from "../../database/client.js";

export class DeleteUnidadeController {

    async handle(request, response) {

        const { id } = request.params;

        try {
            const unidade = await prismaClient.unidade.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(unidade);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
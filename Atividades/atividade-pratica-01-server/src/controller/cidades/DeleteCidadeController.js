import { prismaClient } from "../../database/client.js";

export class DeleteCidadeController {

    async handle(request, response) {

        const { id } = request.params;

        try {
            const cidade = await prismaClient.cidade.delete({
                where: {
                    id: id
                }
            });

            return response.json(cidade);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
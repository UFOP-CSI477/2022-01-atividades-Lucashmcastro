import { prismaClient } from "../../database/client.js";

export class DeleteLocalColetaController {

    async handle(request, response) {

        const { id } = request.params;

        try {
            const localColeta = await prismaClient.localColeta.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(localColeta);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
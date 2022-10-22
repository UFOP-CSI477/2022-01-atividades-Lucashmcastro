import { prismaClient } from "../../database/client.js";

export class DeleteEstadoController {

    async handle(request, response) {

        const { id } = request.params;

        try {
            const estado = await prismaClient.estado.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(estado);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
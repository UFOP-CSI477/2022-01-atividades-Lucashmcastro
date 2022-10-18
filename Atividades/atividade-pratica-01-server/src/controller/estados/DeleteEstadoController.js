import { prismaClient } from "../../database/client.js";

export class DeleteEstadoController {

    async handle(request, response) {

        const { id } = request.body.data;
        //id = id

        try {
            const estado = await prismaClient.estado.delete({
                where: {
                    id: id
                }
            });

            return response.json(estado);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
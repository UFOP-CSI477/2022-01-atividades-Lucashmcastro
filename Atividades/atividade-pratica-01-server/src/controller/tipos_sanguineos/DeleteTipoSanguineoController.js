import { prismaClient } from "../../database/client.js";

export class DeleteTipoSanguineoController {

    async handle(request, response) {

        const { id } = request.params;

        try {
            const tipoSanguineo = await prismaClient.tipoSanguineo.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(tipoSanguineo);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
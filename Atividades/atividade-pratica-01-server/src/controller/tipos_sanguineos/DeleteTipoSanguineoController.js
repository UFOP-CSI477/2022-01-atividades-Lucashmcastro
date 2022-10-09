import { prismaClient } from "../../database/client.js";

export class DeleteTipoSanguineoController {

    async handle(request, response) {

        let { id } = request.body.data;
        id = parseInt(id);

        try {
            const tipoSanguineo = await prismaClient.tipoSanguineo.delete({
                where: {
                    id: id
                }
            });

            return response.json(tipoSanguineo);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
import { prismaClient } from "../../database/client.js";

export class DeleteLocalColetaController {

    async handle(request, response) {

        let { id } = request.body.data;
        id = parseInt(id);

        try {
            const localColeta = await prismaClient.localColeta.delete({
                where: {
                    id: id
                }
            });

            return response.json(localColeta);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
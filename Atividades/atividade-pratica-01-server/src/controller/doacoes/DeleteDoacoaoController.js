import { prismaClient } from "../../database/client.js";

export class DeleteDoacaoController {

    async handle(request, response) {

        let { id } = request.body.data;
        id = parseInt(id);

        try {
            const doacao = await prismaClient.doacao.delete({
                where: {
                    id: id
                }
            });

            return response.json(doacao);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
import { prismaClient } from "../../database/client.js";

export class DeletePessoaController {

    async handle(request, response) {

        const { id } = request.params;

        try {
            const pessoa = await prismaClient.pessoa.delete({
                where: {
                    id: id
                }
            });

            return response.json(pessoa);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
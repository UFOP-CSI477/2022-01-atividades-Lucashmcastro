import { Cotacao } from "@prisma/client";
import { prismaClient } from "../../database/client.js";

export class DeleteCotacaoController {

    async handle(request: { params: { id: any; }; }, response: { json: (arg0: Cotacao) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: unknown): any; new(): any; }; }; }) {

        const { id } = request.params;

        try {
            const cotacao = await prismaClient.cotacao.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(cotacao);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
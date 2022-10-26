import { Acao } from "@prisma/client";
import { prismaClient } from "../../database/client.js";

export class DeleteAcaoController {

    async handle(request: { params: { id: any; }; }, response: { json: (arg0: Acao) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: unknown): any; new(): any; }; }; }) {

        const { id } = request.params;

        try {
            const acao = await prismaClient.acao.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(acao);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
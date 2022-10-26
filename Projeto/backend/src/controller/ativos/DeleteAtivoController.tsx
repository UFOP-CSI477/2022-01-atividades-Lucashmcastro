import { Ativo } from "@prisma/client";
import { prismaClient } from "../../database/client.js";

export class DeleteAtivoController {

    async handle(request: { params: { id: any; }; }, response: { json: (arg0: Ativo) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: unknown): any; new(): any; }; }; }) {

        const { id } = request.params;

        try {
            const ativo = await prismaClient.ativo.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(ativo);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
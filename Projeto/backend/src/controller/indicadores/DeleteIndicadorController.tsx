import { Indicador } from "@prisma/client";
import { prismaClient } from "../../database/client.js";

export class DeleteIndicadorController {

    async handle(request: { params: { id: any; }; }, response: { json: (arg0: Indicador) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: unknown): any; new(): any; }; }; }) {

        const { id } = request.params;

        try {
            const indicador = await prismaClient.indicador.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(indicador);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
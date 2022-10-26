import { Bolsa } from "@prisma/client";
import { prismaClient } from "../../database/client.js";

export class DeleteBolsaController {

    async handle(request: { params: { id: any; }; }, response: { json: (arg0: Bolsa) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: unknown): any; new(): any; }; }; }) {

        const { id } = request.params;

        try {
            const bolsa = await prismaClient.bolsa.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(bolsa);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
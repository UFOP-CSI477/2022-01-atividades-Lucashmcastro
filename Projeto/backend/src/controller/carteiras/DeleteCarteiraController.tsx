import { Carteira } from "@prisma/client";
import { prismaClient } from "../../database/client.js";

export class DeleteCarteiraController {

    async handle(request: { params: { id: any; }; }, response: { json: (arg0: Carteira) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: unknown): any; new(): any; }; }; }) {

        const { id } = request.params;

        try {
            const carteira = await prismaClient.carteira.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(carteira);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
import { Empresa } from "@prisma/client";
import { prismaClient } from "../../database/client.js";

export class DeleteEmpresaController {

    async handle(request: { params: { id: any; }; }, response: { json: (arg0: Empresa) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: unknown): any; new(): any; }; }; }) {

        const { id } = request.params;

        try {
            const empresa = await prismaClient.empresa.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(empresa);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
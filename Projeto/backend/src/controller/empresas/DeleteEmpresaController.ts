import { Empresa } from "@prisma/client";
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class DeleteEmpresaController {

    async handle(request: Request, response: Response){
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
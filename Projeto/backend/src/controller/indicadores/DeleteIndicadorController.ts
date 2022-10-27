import { Indicador } from "@prisma/client";
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class DeleteIndicadorController {

    async handle(request: Request, response: Response){
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
import { Bolsa } from "@prisma/client";
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";


export class DeleteBolsaController {

    async handle(request: Request, response: Response){
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
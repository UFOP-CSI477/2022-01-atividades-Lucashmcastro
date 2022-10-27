import { Carteira } from "@prisma/client";
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";


export class DeleteCarteiraController {

    async handle(request: Request, response: Response){
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
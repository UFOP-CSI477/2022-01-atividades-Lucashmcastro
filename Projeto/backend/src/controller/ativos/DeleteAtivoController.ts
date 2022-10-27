import { Ativo } from "@prisma/client";
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class DeleteAtivoController {

    async handle(request: Request, response: Response){
        
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
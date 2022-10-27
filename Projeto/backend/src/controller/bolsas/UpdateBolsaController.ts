import { Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class UpdateBolsaController {
    async handle(request: Request, response: Response){      
        const { id, nome, origem, status } = request.body;

        const bolsa = await prismaClient.bolsa.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                origem,
                status
            }
        });

        return response.json(bolsa);
    }
}
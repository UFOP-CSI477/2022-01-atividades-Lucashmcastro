import { Ativo } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class GetAllCarteiraController {

    async handle(request: Request, response: Response){
        const carteiras = await prismaClient.carteira.findMany({
            select: {
                id: true,
                nome: true,
                cpf: true,
                status: true,
                ativo: true,
                created_at:true
            }
        });

        console.log(carteiras);
        return response.json(carteiras);

    }

}
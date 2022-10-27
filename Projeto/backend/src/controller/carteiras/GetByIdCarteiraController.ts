import { Ativo } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class GetByIdCarteiraController{

    async handle(request: Request, response: Response){
        const { id } = request.params;

        const carteira = await prismaClient.carteira.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                id: true,
                nome: true,
                cpf: true,
                status: true,
                created_at: true,
                ativo: true
            }

        });

        console.log(carteira);
        return response.json(carteira);
    }
}
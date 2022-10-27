import { Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class GetByIdAtivoController{

    async handle(request: Request, response: Response){
        
        const { id } = request.params;

        const ativo = await prismaClient.ativo.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                id: true,
                tipo: true,
                descricao: true,
                created_at: true,
                bolsa: true
            }

        });

        console.log(ativo);
        return response.json(ativo);
    }
}
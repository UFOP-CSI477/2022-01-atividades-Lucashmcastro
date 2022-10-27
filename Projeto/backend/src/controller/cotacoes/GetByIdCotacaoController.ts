import { Empresa, Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client';
import { Request, Response } from "express";

export class GetByIdCotacaoController{

    async handle(request: Request, response: Response){
        const { id } = request.params;

        const cotacao = await prismaClient.cotacao.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                id: true,
                valor: true,
                date: true,
                created_at: true,
                empresa: true,
                bolsa: true
            }

        });

        console.log(cotacao);
        return response.json(cotacao);
    }
}